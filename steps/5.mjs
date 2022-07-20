import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "zora-get-tokenuri",
      extractor: {
        args: [
          resolve(env.DATA_DIR, "zora-call-tokenmetadatauri-transformation"),
        ],
      },
      transformer: {},
    },
  ],
];
