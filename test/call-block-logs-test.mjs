// @format
import { resolve } from "path";

import test from "ava";

import { slurpadd } from "../src/utils.mjs";

const transferEventSelector =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const fileName = "call-block-logs-transformation";
test(`if ${fileName} file contains duplicates`, async (t) => {
  const list = await slurpadd(resolve("results", fileName));
  const ids = list.map(
    ({ log }) => `${log.address}/${BigInt(log.topics[3]).toString(10)}`
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
        `For key "${key}" occurrence in ${fileName} is ${value} (max: 1)`
      );
    }
  }
  t.false(poisoned);
});
