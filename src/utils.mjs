import { readFile } from "fs/promises";

const lineBreak = "\n";
// NOTE: Equivalent of `jq -s "add"` hence the name.
export async function slurpadd(filePath) {
  const content = (await readFile(filePath)).toString();
  const lines = content.split(lineBreak);
  // NOTE: We're `popping` the last line as it'll be the empty string
  lines.pop();
  const pLines = lines.map(JSON.parse);
  return pLines.reduce((acc, elem) => [...acc, ...elem], []);
}
