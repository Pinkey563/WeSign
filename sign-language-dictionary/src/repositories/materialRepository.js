import pool from '../configs/db.js';

const materialRepository = {
  getMaterialsByTopicId: async (topicId) => {
    const result = await pool.query('SELECT * FROM materials WHERE topic_id = $1', [topicId]);
    return result.rows;
  },
};

export default materialRepository;
