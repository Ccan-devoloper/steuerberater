/* Verbrauch der Claude API mitschreiben (für den Wochenbericht). */
const PREISE = {
  "claude-opus-5": { ein: 5, aus: 25, cacheLesen: 0.5, cacheSchreiben: 6.25 },
  "claude-sonnet-5": { ein: 2, aus: 10, cacheLesen: 0.2, cacheSchreiben: 2.5 },
  "claude-opus-4-8": { ein: 5, aus: 25, cacheLesen: 0.5, cacheSchreiben: 6.25 },
  "claude-haiku-4-5": { ein: 1, aus: 5, cacheLesen: 0.1, cacheSchreiben: 1.25 },
};

const posten = [];

export function erfassen(modell, usage, zweck = "") {
  if (!usage) return 0;
  const p = PREISE[modell] || PREISE["claude-opus-5"];
  const usd = ((usage.input_tokens || 0) * p.ein + (usage.output_tokens || 0) * p.aus + (usage.cache_read_input_tokens || 0) * p.cacheLesen + (usage.cache_creation_input_tokens || 0) * p.cacheSchreiben) / 1e6;
  posten.push({ modell, zweck, usd, ein: usage.input_tokens || 0, aus: usage.output_tokens || 0, cache: usage.cache_read_input_tokens || 0 });
  return usd;
}

export function summe() {
  return posten.reduce((a, b) => a + b.usd, 0);
}

export function abschluss() {
  return { usd: summe(), aufrufe: posten.length, cacheAnteil: posten.length ? posten.reduce((a, b) => a + b.cache, 0) / Math.max(1, posten.reduce((a, b) => a + b.ein + b.cache, 0)) : 0, posten: [...posten] };
}
