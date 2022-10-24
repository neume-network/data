import { readFileSync } from "fs";
import { resolve } from "path";
import { env } from "process";

const platformAddresses = {
  "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7": {
    name: "zora",
  },
  "0x0bc2a24ce568dad89691116d5b34deb6c203f342": {
    name: "catalog",
    version: "2.0.0",
  },
  "0xf5819e27b9bad9f97c177bf007c1f96f26d91ca6": {
    name: "noizd",
  },
  "0x2b5426a5b98a3e366230eba9f95a24f09ae4a584": {
    name: "mintsongs",
    version: "2.0.0",
  },
};

export function ingestFile(name, mainObj = {}) {
  // NOTE: We don't want this function to have side effects as e.g. mutating
  // `mainObj`'s properties which is why we copy it.
  let copyObj = { ...mainObj };
  const content = readFileSync(resolve(name)).toString();
  const lines = content.split("\n").filter((line) => !!line);

  for (const line of lines) {
    const pLine = JSON.parse(line);
    copyObj = { ...copyObj, ...pLine };
  }

  return copyObj;
}

export default [[
  {
    name: "call-block-logs",
    transformer: {
      args: [
        resolve(env.DATA_DIR, "call-block-logs-extraction"),
	ingestFile(
          "neume-network-data/results/sound-protocol-filter-contracts-transformation",
          ingestFile(
            "neume-network-data/results/sound-protocol-filter-contracts-transformation",
            platformAddresses
          ),
        ),
      ],
    },
  },
]];
