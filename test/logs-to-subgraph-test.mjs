// @format
import { resolve } from "path";

import test from "ava";

import { slurpadd } from "../src/utils.mjs";

const fileName = "logs-to-subgraph-transformation";
// NOTE: We're skipping this test as it's OK to have duplicates here.
test.skip(`if ${fileName} file contains duplicates`, async (t) => {
  const list = await slurpadd(resolve("results", fileName));
  const ids = list.map((log) => `${log.address}/${log.tokenId}`);
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
        `For key "${key}" occurrence in ${fileName} is ${value} (max: 1)`
      );
    }
  }
  t.false(poisoned);
});
