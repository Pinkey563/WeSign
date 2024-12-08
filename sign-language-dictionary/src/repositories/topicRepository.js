import pool from '../configs/db.js';

const topicRepository = {
  getTopicsByClassAndSubject: async (classCode, subject) => {
    try {
      const result = await pool.query(
        'SELECT * FROM topics WHERE class_code = $1 AND subject = $2',
        [classCode, subject]
      );
      return result.rows;
    } catch (error) {
      console.error('Error querying topics:', error);
      throw error; // Re-throw the error to be caught by the route handler
    }
  },
};

export default topicRepository;



