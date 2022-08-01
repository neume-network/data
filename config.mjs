import { env } from "process";

export default {
  endpoints: {
    [env.RPC_HTTP_HOST]: {
      timeout: 10000,
      requestsPerUnit: 12,
      unit: "second",
    },
    "https://metadata.sound.xyz": {
      timeout: 10000,
      requestsPerUnit: 6,
      unit: "second",
    },
    "https://neume.infura-ipfs.io": {
      timeout: 10000,
      requestsPerUnit: 100,
      unit: "second",
    },
  },
};
