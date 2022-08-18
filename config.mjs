import { env } from "process";

export default {
  queue: {
    options: {
      concurrent: 10,
    },
  },
  endpoints: {
    [env.RPC_HTTP_HOST]: {
      timeout: 25000,
      requestsPerUnit: 25,
      unit: "second",
    },
    "https://metadata.sound.xyz": {
      timeout: 25000,
      requestsPerUnit: 10,
      unit: "second",
    },
    "https://neume.infura-ipfs.io": {
      timeout: 25000,
      requestsPerUnit: 80,
      unit: "second",
    },
  },
};
