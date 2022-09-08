// @format
import { resolve } from "path";

import test from "ava";

import { slurpadd } from "../src/utils.mjs";

test("if slurpadd can flatten and return file", async (t) => {
  const list = await slurpadd(resolve("./test/fixtures/line-broken-file"));
  t.deepEqual(list, [
    {
      hello: "world",
    },
    { another: "message" },
    { and: "another" },
  ]);
});
