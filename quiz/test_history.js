const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const template = fs.readFileSync(`${__dirname}/template.html`, 'utf8');
const source = template.slice(template.indexOf('function legacyReport('), template.indexOf('function start()'));
const elements = { weak: {}, refreshHistory: {} };
const context = vm.createContext({
  Uint8Array, TextDecoder, atob, console,
  $: id => elements[id],
  cfg: () => ({}),
  updateStart: () => {},
  showWeak: () => {},
  esc: String,
  shuffle: a => a,
  BANK: [{ subject: 'Navigation', code: '90', questions: [
    { id: '90-001' }, { id: '90-002' }, { id: '90-003' }
  ] }],
  repoHistory: { runs: [], wrong: {} },
  historyReady: false,
  historyRequest: 0,
});
vm.runInContext(source, context);

test('legacy and new reports combine in chronological order', async () => {
  const legacy = '## Sub-topics to re-study\n| Navigation › Weather | 1/2 | x |\n' +
    '## Missed questions\n1. **Question** _(90-001, Weather)_';
  const data = { date: '2026-01-03T00:00:00Z', topics: { 'Navigation › Weather': [1, 1] },
    answers: [{ id: '90-001', ok: true }, { id: '90-002', ok: false }] };
  const modern = `<!-- PPL-QUIZ-RESULT-V1 ${Buffer.from(JSON.stringify(data)).toString('base64')} -->`;
  context.fetch = async url => ({
    ok: true,
    json: async () => ({ tree: [
      { type: 'blob', path: 'results/quiz-20260103000000-1.md' },
      { type: 'blob', path: 'results/quiz-2026-01-02-03-04.md' }
    ] }),
    text: async () => String(url).includes('2026-01-02') ? legacy : modern,
  });
  await context.loadHistory();
  assert.equal(context.historyReady, true);
  assert.equal(context.repoHistory.runs.length, 2);
  assert.equal(context.repoHistory.runs[0].legacy, true);
  assert.equal(context.repoHistory.wrong['90-001'], 0);
  assert.equal(context.repoHistory.wrong['90-002'], 1);
  assert.equal(context.buildPool([0], true, 1)[0].id, '90-002');
  assert.equal(context.buildPool([0], false, 3).length, 3);
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
