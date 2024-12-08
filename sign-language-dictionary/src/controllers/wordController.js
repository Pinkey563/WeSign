import wordRepository from '../repositories/wordRepository.js';

// Add new word
export const addNewWord = async (req, res) => {
  const { word, video_link, image, type } = req.body; // Include image in request
  if (!word || !type) {
    return res.status(400).send('Word and type are required');
  }
  try {
    const newWord = await wordRepository.createWord(word, video_link, image, type);
    res.status(201).json(newWord);
  } catch (error) {
    console.error('Error adding new word:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Fetch all words
export const getAll = async (req, res) => {
  try {
    const words = await wordRepository.getAllWords();
    res.status(200).json(words);
  } catch (error) {
    console.error('Error fetching all words:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Search for a word in the dictionary
export const searchWord = async (req, res) => {
  console.log('Search endpoint hit'); // Debugging log
  const { word, searchType } = req.query;
  if (!word) {
    return res.status(400).send('Word is required');
  }
  try {
    let result;
    switch (searchType) {
      case 'word':
        result = await wordRepository.findWordByWord(word);
        break;
      case 'sentence':
        result = await wordRepository.findSentenceByWord(word);
        break;
      case 'paragraph':
        result = await wordRepository.findParagraphByWord(word);
        break;
      default:
        result = await wordRepository.findAllByWord(word);
    }

    // Trả về mảng rỗng nếu không tìm thấy kết quả
    if (!result || result.length === 0) {
      console.log('No results found'); // Debugging log
      return res.json([]);
    }

    res.json(result);
  } catch (error) {
    console.error('Error searching word:', error); 
    res.status(500).send('Internal Server Error');
  }
};
