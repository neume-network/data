import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "zora-call-tokenmetadatauri",
      extractor: {
        args: [resolve(env.DATA_DIR, "logs-to-subgraph-transformation")],
      },
      transformer: {},
    },
  ],
];
