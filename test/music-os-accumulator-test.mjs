// @format
import { resolve } from "path";
import { readFile } from "fs/promises";

import test from "ava";

test("if music-os-accumulation file contains duplicates", async (t) => {
  const content = (
    await readFile(resolve("results/music-os-accumulator-extraction"))
  ).toString();
  const tracks = JSON.parse(content);
  const ids = tracks.map(
    (track) => `${track.erc721.address}/${track.erc721.tokenId}`
  );
  let map = {};
  for (const id of ids) {
    if (map[id]) {
      map[id] += 1;
    } else {
      map[id] = 1;
    }
  }

  let poisoned = false;
  for (const [key, value] of Object.entries(map)) {
    if (value !== 1) {
      poisoned = true;
      console.log(
        `For key "${key}" occurrence in music-os-accumulator is ${value} (max: 1)`
      );
    }
  }
  t.false(poisoned);
});
