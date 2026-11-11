const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const template = fs.readFileSync(`${__dirname}/template.html`, 'utf8');
const source = template.slice(template.indexOf('function showWeak()'), template.indexOf('function start()'));
const uploadSource = template.slice(template.indexOf('function encodeMetadata('), template.indexOf('const c0 = cfg();'));
const elements = { weak: {}, refreshHistory: {}, importCache: {}, importMsg: {} };
const context = vm.createContext({
  Uint8Array, TextEncoder:require('node:util').TextEncoder, TextDecoder, atob, btoa, console, crypto: require('node:crypto').webcrypto,
  $: id => elements[id],
  cfg: () => ({}),
  HKEY: 'ppl-quiz-history-v1',
  localStorage: { getItem: () => null },
  location: { hostname: 'example.com' },
  updateStart: () => {},
  esc: String,
  shuffle: a => a,
  BANK: [{ subject: 'Navigation', code: '90', questions: [
    { id: '90-001' }, { id: '90-002' }, { id: '90-003' }
  ] }],
  repoHistory: { runs: [], wrong: {} },
  historyReady: false,
  historyRequest: 0,
});
vm.runInContext(source + '\n' + uploadSource, context);

test('legacy and new reports combine in chronological order', async () => {
  const legacy = '## Sub-topics to re-study\n| Navigation › Weather | 1/2 | x |\n' +
    '## Missed questions\n1. **Question** _(90-001, Weather)_';
  const data = { date: '2026-01-03T00:00:00Z', topics: { 'Navigation › Weather': [1, 1] },
    answers: [{ id: '90-001', ok: true }, { id: '90-002', ok: false }] };
  const modern = `<!-- PPL-QUIZ-RESULT-V1 ${Buffer.from(JSON.stringify(data)).toString('base64')} -->`;
  const importedData = {kind:'browser-cache-import', date:'2026-01-04T00:00:00Z', cacheAsOf:'2026-01-02T00:00:00Z', importedRuns:4,
    topics:{'Navigation › Recovered topic':[3,4]}, wrong:{'90-001':3}, cacheId:'stable-cache-id', answers:[]};
  const imported = `# Imported history\n<!-- PPL-QUIZ-RESULT-V1 ${Buffer.from(JSON.stringify(importedData)).toString('base64')} -->`;
  context.fetch = async url => ({
    ok: true,
    json: async () => ({ tree: [
      { type: 'blob', path: 'results/quiz-20260103000000-1.md' },
      { type: 'blob', path: 'results/quiz-2026-01-02-03-04.md' },
      { type: 'blob', path: 'results/quiz-20260104000000-2.md' }
    ] }),
    text: async () => String(url).includes('2026-01-02') ? legacy :
      String(url).includes('20260104000000') ? imported : modern,
  });
  await context.loadHistory();
  assert.equal(context.historyReady, true);
  assert.equal(context.repoHistory.runs.length, 3);
  assert.equal(context.repoHistory.runs[0].legacy, true);
  assert.equal(context.repoHistory.runs[2].cacheImport, true);
  assert.equal(context.repoHistory.wrong['90-001'], 2);
  assert.equal(context.repoHistory.wrong['90-002'], 1);
  assert.equal(context.repoHistory.runs[2].wrong['90-001'], 3);
  assert.match(elements.weak.innerHTML, /1 complete report, 4 imported browser quizzes/);
  assert.match(elements.weak.innerHTML, /1 older report is excluded/);
  assert.match(elements.weak.innerHTML, /75% of 4/);
  assert.equal(context.buildPool([0], true, 1)[0].id, '90-001');
  assert.equal(context.buildPool([0], false, 3).length, 3);
});

test('complete reports alone determine topic percentages', () => {
  context.repoHistory = { wrong: {}, runs: [
    { legacy: true, topics: { 'Navigation › Weather': [0, 3] } },
    { legacy: false, topics: { 'Navigation › Weather': [2, 2] } },
    { legacy: false, topics: { 'Navigation › Weather': [1, 2] } }
  ] };
  context.showWeak();
  assert.match(elements.weak.innerHTML, /75% of 4/);
  assert.match(elements.weak.innerHTML, /2 complete reports/);
});

test('loading errors disable history-based prioritisation', async () => {
  context.fetch = async () => ({ ok: false, status: 403, statusText: 'Forbidden' });
  await context.loadHistory();
  assert.equal(context.historyReady, false);
  assert.match(elements.weak.innerHTML, /403/);
});

test('invalid saved metadata is reported, not silently ignored', () => {
  const encoded = Buffer.from(JSON.stringify({ date: '2026', topics: {}, answers: [{ id: '90-001' }] })).toString('base64');
  assert.throws(() => context.parseReport(`<!-- PPL-QUIZ-RESULT-V1 ${encoded} -->`, 'bad.md'), /Invalid result data/);
});

test('invalid cached browser history cannot be uploaded', async () => {
  let uploaded = false;
  context.historyReady = true;
  context.localStorage.getItem = () => JSON.stringify({runs:[{topics:{'Navigation › Weather':[3,2]}}], wrong:{}});
  context.fetch = async () => { uploaded = true; return {ok:true,json:async()=>({})}; };
  await context.importBrowserHistory();
  assert.equal(uploaded, false);
  assert.match(elements.importMsg.textContent, /Invalid cached score/);
});

test('cached browser history is uploaded as a complete aggregate result', async () => {
  let uploaded;
  context.historyReady = true;
  context.location.hostname = 'localhost';
  context.localStorage.getItem = key => key === 'ppl-quiz-history-v1' ? JSON.stringify({
    runs:[{date:'2025-01-01T10:00:00Z',topics:{'Navigation › Weather':[2,3]}}],
    wrong:{'90-001':2}
  }) : null;
  context.fetch = async (url, options) => {
    if (url === '/api/save') {
      uploaded = JSON.parse(options.body);
      return {ok:true,json:async()=>({message:`Saved results/${uploaded.name}`})};
    }
    return {ok:true,json:async()=>({tree:[]})};
  };
  await context.importBrowserHistory();
  assert.ok(uploaded, elements.importMsg.textContent);
  assert.match(uploaded.name, /^quiz-\d+-\d+\.md$/);
  assert.match(uploaded.content, /Imported PPL\(A\) browser quiz history/);
  assert.equal(context.repoHistory.runs.length, 0);
  assert.match(elements.importMsg.textContent, /Recovered 1 quizzes/);
  const payload = uploaded.content.match(/PPL-QUIZ-RESULT-V1 ([A-Za-z0-9+/=]+)/)[1];
  const restored = context.parseReport(`<!-- PPL-QUIZ-RESULT-V1 ${payload} -->`, uploaded.name);
  assert.deepEqual(JSON.parse(JSON.stringify(restored.topics)), {'Navigation › Weather':[2,3]});
  assert.deepEqual(JSON.parse(JSON.stringify(restored.wrong)), {'90-001':2});
});
