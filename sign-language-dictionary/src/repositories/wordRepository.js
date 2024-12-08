import pool from '../configs/db.js';

const wordRepository = {
  createWord: async (word, video_link, image, type) => {
    const result = await pool.query(
      'INSERT INTO words (word, video_link, type, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [word, video_link, type, image]
    );
    return result.rows[0];
  },
  findWordByWord: async (word) => {
    const result = await pool.query('SELECT * FROM words WHERE word ILIKE $1 AND type = $2', [`%${word}%`, 'word']);
    return result.rows;
  },
  findSentenceByWord: async (word) => {
    const result = await pool.query('SELECT * FROM words WHERE word ILIKE $1 AND type = $2', [`%${word}%`, 'sentence']);
    return result.rows;
  },
  findParagraphByWord: async (word) => {
    const result = await pool.query('SELECT * FROM words WHERE word ILIKE $1 AND type = $2', [`%${word}%`, 'paragraph']);
    return result.rows;
  },
  findAllByWord: async (word) => {
    const result = await pool.query('SELECT * FROM words WHERE word ILIKE $1', [`%${word}%`]);
    return result.rows;
  },
  getAllWords: async () => {
    const result = await pool.query('SELECT * FROM words');
    return result.rows;
  }
};

export default wordRepository;
