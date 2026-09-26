import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../public/instagram-dashboard.html', import.meta.url), 'utf8');
const names = [
  'preproductionAccountKey', 'preproductionAccount', 'preproductionBase',
  'preproductionSlideRel', 'preproductionReelRel', 'preproductionReelCoverRel',
  'storyAssetRel', 'preproductionAssetVersionKey', 'preproductionAssetUrl',
  'sortedStories', 'preproductionDayLabel', 'preproductionCanPreviewMedia',
  'preproductionMedia', 'preproductionPost', 'preproductionStoryCards',
  'renderPreproductionSummary',
];
function functionSource(name) {
  const start = html.indexOf('  function ' + name + '(');
  assert.notEqual(start, -1, 'Missing dashboard function: ' + name);
  const end = html.indexOf('\n  }', start);
  assert.notEqual(end, -1, 'Missing function end: ' + name);
  // Several existing path helpers are deliberately one-line functions.
  const firstLineEnd = html.indexOf('\n', start);
  if (html.slice(start, firstLineEnd).trimEnd().endsWith('}')) return html.slice(start, firstLineEnd);
  return html.slice(start, end + 4);
}
function harness() {
  const summary = { innerHTML: '' };
  const context = vm.createContext({
    store: { account: 'herr', assetVersions: {}, data: {} },
    ACCOUNTS: {
      herr: { repo: 'Ccan-devoloper/herrjurist', name: 'HerrJurist', igUser: 'herrjurist', avatar: 'HJ' },
      steuer: { repo: 'Ccan-devoloper/steuerberater', name: 'Steuerberater', igUser: 'examenscampus', avatar: 'EC' },
    },
    STORY_ART_LABEL: { frage: 'Frage', antwort: 'Antwort', teaser: 'Teaser', norm: 'Norm des Tages' },
    esc: (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])),
    parseDate: (date) => new Date(date + 'T12:00:00Z'),
    $: (selector) => selector === '#preproductionSummary' ? summary : null,
  });
  vm.runInContext(names.map(functionSource).join('\n'), context);
  return { context, summary };
}
function fixture(status = 'erneut-zu-rendern') {
  const day = {
    datum: '2026-09-27', freigabeBetreiber: true, liveVerknuepft: true,
    renderVorschau: {
      status, erzeugtAm: '2026-09-23T20:52:24.743Z',
      pfad: 'vorproduktion/2026-09-27/fertig', freigabeBetreiber: false,
    },
    plan: {
      beitraege: [
        { slot: 'b1', zeit: '10:30', format: 'wochenrueckblick' },
        { slot: 'b2', zeit: '15:00', format: 'schema' },
        { slot: 'b3', zeit: '20:30', format: 'reel' },
      ],
      stories: ['teaser', 'teaser', 'teaser', 'frage', 'antwort', 'norm', 'fehler', 'tipp', 'zahl'].map((art, i) => ({
        slot: 's' + (i + 1), art, zeit: ['10:30', '15:00', '20:30', '07:15', '07:15', '12:00', '14:00', '17:45', '19:00'][i],
      })),
    },
    inhalte: {
      b1: { format: 'wochenrueckblick', caption: 'Wochenrückblick', folien: Array.from({ length: 7 }, (_, i) => ({ titel: 'Rückblick ' + (i + 1) })) },
      b2: { format: 'schema', caption: 'Titel Klausel Zustellung', folien: Array.from({ length: 7 }, (_, i) => ({ titel: 'Schema ' + (i + 1) })) },
      b3: { format: 'reel', caption: 'Gefährliche Körperverletzung', szenen: [{ titel: '§ 224 StGB' }] },
    },
  };
  day.plan.stories.forEach((s) => { day.inhalte[s.slot] = { titel: 'Story ' + s.slot, freigabeBetreiber: false }; });
  return day;
}

test('all inline dashboard scripts retain valid JavaScript syntax', () => {
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length > 0);
  for (const [, source] of scripts) new vm.Script(source);
});

test('previous render can be previewed without declaring the updated render finished', () => {
  const { context } = harness();
  const day = fixture();
  const before = JSON.stringify(day);
  assert.equal(context.preproductionCanPreviewMedia(day), true);
  assert.equal(context.preproductionCanPreviewMedia(fixture('fertig')), true);
  assert.equal(JSON.stringify(day), before);
  for (const status of ['ausstehend', 'teilweise-fertig', 'fehler', undefined]) {
    assert.equal(context.preproductionCanPreviewMedia(fixture(status === undefined ? '' : status)), false);
  }
  for (const field of ['pfad', 'erzeugtAm']) {
    const incomplete = fixture();
    delete incomplete.renderVorschau[field];
    assert.equal(context.preproductionCanPreviewMedia(incomplete), false);
  }
  const invalid = fixture();
  invalid.renderVorschau.erzeugtAm = 'kein Datum';
  assert.equal(context.preproductionCanPreviewMedia(invalid), false);
  assert.equal(context.preproductionCanPreviewMedia({ plan: {}, inhalte: {} }), true, 'Preserve legacy previews without render metadata');
});

test('two carousels, all fourteen thumbnails, reel and nine stories are visible', () => {
  const { context } = harness();
  const day = fixture();
  const before = JSON.stringify(day);
  const feed = day.plan.beitraege.map((p) => context.preproductionPost(day, day.datum, p)).join('');
  const stories = context.preproductionStoryCards(day, day.datum);
  assert.equal((feed.match(/data-carousel="1"/g) || []).length, 2);
  assert.equal((feed.match(/<div class="slide-thumbs">/g) || []).length, 2);
  assert.equal((feed.match(/title="Folie \d+"/g) || []).length, 14);
  assert.equal((feed.match(/<video /g) || []).length, 1);
  assert.match(feed, /2026-09-27-b3\.mp4/);
  assert.match(feed, /2026-09-27-b3-cover\.jpg/);
  assert.equal((stories.match(/data-story-index=/g) || []).length, 9);
  for (const story of day.plan.stories) assert.ok(stories.includes(story.slot + '-' + story.art + '.jpg'));
  assert.doesNotMatch(feed + stories, /TEXTENTWURF|Bild noch nicht gerendert/);
  assert.equal(JSON.stringify(day), before, 'No render state, approval or schedule mutations');
});

test('real text-only drafts remain drafts', () => {
  const { context, summary } = harness();
  const day = fixture('ausstehend');
  const feed = day.plan.beitraege.map((p) => context.preproductionPost(day, day.datum, p)).join('');
  const stories = context.preproductionStoryCards(day, day.datum);
  assert.match(feed, /TEXTENTWURF/);
  assert.match(stories, /TEXTENTWURF/);
  assert.doesNotMatch(feed, /<video |data-carousel="1"|slide-thumbs/);
  assert.doesNotMatch(stories, /data-story-index=/);
  context.renderPreproductionSummary(day, {}, false);
  assert.match(summary.innerHTML, /Render ausstehend/);
});

test('pending update stays visible as a warning, separate from live priority', () => {
  const { context, summary } = harness();
  const day = fixture();
  const before = JSON.stringify(day);
  context.renderPreproductionSummary(day, {}, true);
  assert.match(summary.innerHTML, /Aktualisierung ausstehend/);
  assert.match(summary.innerHTML, /Normalbetrieb gesperrt/);
  assert.doesNotMatch(summary.innerHTML, /aktuell gerendert/);
  assert.equal(JSON.stringify(day), before);
});

test('preview paths remain isolated by account', () => {
  const { context } = harness();
  const day = fixture();
  context.store.account = 'steuer';
  const feed = context.preproductionPost(day, day.datum, day.plan.beitraege[0]);
  assert.match(feed, /Ccan-devoloper\/steuerberater\/instagram-assets\/vorproduktion/);
  assert.doesNotMatch(feed, /Ccan-devoloper\/herrjurist\//);
});
