import { env } from "process";

export default {
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
