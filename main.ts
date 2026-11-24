import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Autocorrect Fail entry — one line, under 200 characters,
// a funny autocorrect fail and nothing else.
// Judge brief: clarity of the slip, surprise of the wrong word,
// lands on first read.
// Chosen line: "love" -> "loathe" is one letter-ish slip with huge
// consequences, and the narrator being too scared to correct it
// sells the embarrassment in one breath.
const LINE =
  "I texted my mom 'I love you' and autocorrect changed it to 'I loathe you' — she hasn't replied in three days and I'm too scared to correct it.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
