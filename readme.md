# neume-network/data

- We crawl all of zora (catalog.works, sound.xyz daily through [GitHub Actions](https://github.com/neume-network/data/actions). 
- You can set up your own crawl with [neume-network/core](https://github.com/neume-network/core)
- But feel free to use the final data set: [results/music-os-accumulator-extraction](https://github.com/neume-network/data/blob/main/results/music-os-accumulator-extraction).

## Debugging a crawl

Since the crawl on GitHub Actions is taking up to two or three hours per run currently and since this means that the GitHub Action's interface stops reporting the full logs into the Actions interface, it means that if you want to debug a full crawler run, you'll have to wait for it to be canceled or finished because only then you can download the full log archive. Here's that option in the GitHub interface:

<img width="886" alt="Screenshot 2022-07-11 at 15 33 57" src="https://user-images.githubusercontent.com/2758453/178276723-6226f4f0-63f0-4c18-8e79-7413e3ed0c92.png">


## Working releases

Not all commits in neume-network/core work flawlesly in production. But some do and this is confirmed by e.g. a branch's top commit passing the entire crawl suite. Below are a number of tree states in neume-network/core that pass the entire crawling suite.

- 2022-07-12: https://github.com/neume-network/core/tree/2ff8bd044b0bd4f063c406f558518e01a577c3d4
- 2022-07-11: https://github.com/neume-network/core/tree/7c4a5b814f77e5e881658d7fadb9794caa160581
