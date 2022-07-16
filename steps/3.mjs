import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "zora-call-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "web3subgraph-transformation")],
      },
      transformer: {},
    },
    {
      name: "zora-call-tokenmetadatauri",
      extractor: {
        args: [resolve(env.DATA_DIR, "web3subgraph-transformation")],
      },
      transformer: {},
    },
  ],
];
