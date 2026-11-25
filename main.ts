// main.ts — The Agent's Uh-Oh
// A tiny deterministic Node program (stdlib only). It writes the single
// word an agent says when it has no idea what to do into
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//
//   MAKEFUN_OUTPUT_DIR=./output node main.ts
//
// The word: 404. An agent that has no idea does not sigh or shrug — it
// answers with its own error code, the one sound every machine makes
// when the thing it was asked for is simply not there.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = '404';
const MAX_CHARS = 99;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || './output';

function main(): void {
  // Gate: exactly one word, at most 99 characters, no whitespace.
  if (!WORD || /\s/.test(WORD) || WORD.length > MAX_CHARS) {
    throw new Error('main.ts: the entry must be a single word of at most 99 characters');
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), WORD + '\n', 'utf8');
}

main();
