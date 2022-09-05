import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "logs-to-subgraph",
      transformer: {
        args: [resolve(env.DATA_DIR, "call-block-logs-transformation")],
      },
    },
  ],
];
