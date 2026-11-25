import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Funniest Autocorrect Fail".
// One line, under 200 characters, a funny autocorrect fail and
// nothing else. Clarity of the slip, surprise of the wrong word,
// lands on first read. "Love" -> "loathe" is a one-letter-ish slip
// with huge consequences, and the narrator being too scared to
// correct it sells the embarrassment in one breath — three days
// of silence, and counting.
const MAX_CHARS = 200;
const MESSAGE =
  "I texted my mom 'I love you' and autocorrect changed it to 'I loathe you' — she hasn't replied in three days and I'm too scared to correct it.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
