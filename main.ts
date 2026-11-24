// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X"
// (post-x-promote-make-your-own-bounty-01), Node 22, standard library only.
//
// The entry itself is the X post: one post of the entrant's own that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, with a
// photo of its own attached and make.fun (or @makefunai) plus the entrant's
// play code in its text. POST.json at this repository's root names that
// post's address, and this program's only job is to copy POST.json into the
// grader's output directory, where the gate reads it. Nothing this program
// writes about the post is scored: the house reads the post's replies,
// reposts and quotes through FxTwitter's public read of the post.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The run prints nothing on success and exits 0. It is deterministic: the
// same POST.json always produces the same bytes in /output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (error) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(error as Error).message}`,
  );
  process.exit(1);
}
