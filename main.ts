import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "He asked me to be brief in a 2000-word prompt. I'm still counting. He's at 1,847. We both have problems.";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
