# Word Frequency Counter

A Node.js script that reads multiple text files asynchronously in parallel, counts the frequency of each word across all files, and prints the top N most frequent words.

## Features

- Accepts an array of file paths.
- Reads all files asynchronously and in parallel.
- Counts word frequencies across all files combined.
- Prints the content of each file.
- Prints the full word frequency count.
- Prints the top 5 most frequent words by default.

## Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

## Usage

1. Place your text files in the same directory or specify relative/absolute paths.

2. Update the `filePaths` array in `scriptForRead.js` with the paths to your files:


const filePaths = ['./file1.txt', './file2.txt', './file3.txt'];
