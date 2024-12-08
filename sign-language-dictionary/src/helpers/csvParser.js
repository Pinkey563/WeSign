import fs from 'fs';
import csv from 'csv-parser';
import wordRepository from '../repositories/wordRepository.js';

export const importWordsFromCSV = (filePath) => {
  const words = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      words.push(row);
    })
    .on('end', async () => {
      for (const word of words) {
        await wordRepository.createWord(word.word, word.video_link);
      }
    });
};
