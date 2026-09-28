// Lists translation keys that exist in one messages file but not the other.
// Usage: npm run i18n:check   (exits 1 if the files are out of sync)
import { readFileSync } from 'node:fs';

const load = (file) => JSON.parse(readFileSync(new URL(`../messages/${file}`, import.meta.url), 'utf8'));

const keysOf = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null ? keysOf(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );

const en = new Set(keysOf(load('en.json')));
const jp = new Set(keysOf(load('jp.json')));

const missingInJp = [...en].filter((k) => !jp.has(k));
const extraInJp = [...jp].filter((k) => !en.has(k));

for (const k of missingInJp) console.log(`missing in jp.json: ${k}`);
for (const k of extraInJp) console.log(`only in jp.json (unused): ${k}`);

if (missingInJp.length || extraInJp.length) process.exit(1);
console.log(`en.json and jp.json are in sync (${en.size} keys).`);
