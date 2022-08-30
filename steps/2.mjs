import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "soundxyz-call-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "web3subgraph-transformation")],
      },
      transformer: {},
    },
  ],
];
