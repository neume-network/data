# neume-network/data

[![Index data](https://github.com/neume-network/data/actions/workflows/node.js.yml/badge.svg)](https://github.com/neume-network/data/actions/workflows/node.js.yml)
[![data quality assurance](https://github.com/neume-network/data/actions/workflows/dataqualityassurance.js.yml/badge.svg)](https://github.com/neume-network/data/actions/workflows/dataqualityassurance.js.yml)

> On-chain music NFT data.

## Introduction

The Neume Network's goal is to build an open source, socially scalable, indexer
for all activity within the emerging Web3 Music industry.

In this repository, we're frequently crawling the entire Ethereum main network
on platforms like:

- Zora
- Catalog V1 & V2
- Mint Songs V2
- Sound.xyz

for the latest music NFT releases. Every x minutes, a GitHub Action is fired
that partially crawls a block range delta depending on the last crawl and so
new music NFTs are continuously and automatically committed to this
repository's `results` folder. For https://musicos.xyz/, we have a special file
called `results/music-os-accumulator-extraction` that contains all neatly-
formatted track metadata in a parsable JSON file. Our goal is to enable anyone
to build the Spotify for Web3.

## Continuous Data Retrieval

- You can find [a list of indexing
  jobs](https://github.com/neume-network/data/actions/workflows/node.js.yml) on
  the GitHub Action's page.
- Consider also checking out the GitHub Actions work flow file.
- Note: Neume Network doesn't have to be run on GitHub Actions. It's best run
  on a Unix machine that has an Erigon node running too.

## Continuous Data Quality Assurance

- All track data within `results/music-os-accumulator-extraction` is
  neatly-formatted according to the JSON schema of
  [`@neume-network/schema`](https://github.com/neume-network/schema/blob/main/schema.json).
- We ensure consistency over any track's uniqueness in the list.

## Can I use this data?

I (Tim) currently don't know how to best license the data in the repository. For the time being
if you're in doubt about being able to use this data: Consider configuring and running 
neume network yourself to download a similar data set as ours!
