import { readFile } from 'node:fs/promises';

async function readFilesInParallel(paths) {
  try {
    const readFiles = paths.map(path => readFile(path, 'utf8'));
    const contents = await Promise.all(readFiles);

    return contents;
  } catch (err) {
    console.error('Error while reading files: ', err);
    throw err;
  }
}

function wordFrequencies(contents) {
  const wordMap = new Map();

  contents.forEach(text => {
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') 
      .split(/\s+/);

    for (const word of words) {
      if (!word) continue;
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
  });

  return wordMap;
}

function printTopFrequentWords(wordMap, topFrequency = 5) {
  const sorted = [...wordMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topFrequency);

  console.log(`\nTop ${topFrequency} most frequent words are :`);
  printWordsWithCount(sorted);
}

const printWordsWithCount = (wordMap) => {
    for (const [word, count] of wordMap) {
        console.log(`${word}: ${count}`);
    }
}

const filePaths = ['./file1.txt', './file2.txt', './file3.txt'];

readFilesInParallel(filePaths)
  .then(contents => {
    contents.forEach((content, idx) => {
      console.log(`Content of ${filePaths[idx]}:\n${content}\n`);
    });

    const wordMap = wordFrequencies(contents); 
    printWordsWithCount(wordMap);
    printTopFrequentWords(wordMap, 5);
  });




