import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "zora-call-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "logs-to-subgraph-transformation")],
      },
      transformer: {},
    },
  ],
];
