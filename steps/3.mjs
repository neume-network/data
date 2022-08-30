import { resolve } from "path";
import { env } from "process";

export default [
  [
    {
      name: "soundxyz-get-tokenuri",
      extractor: {
        args: [resolve(env.DATA_DIR, "soundxyz-call-tokenuri-transformation")],
      },
      transformer: {},
    },
  ],
];
