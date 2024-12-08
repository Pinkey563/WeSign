import pool from '../configs/db.js';

const userRepository = {
  createUser: async (username, password) => {
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
    return result.rows[0];
  },
  findUserByUsername: async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  },
  getAllUsers: async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  },
  deleteUserById: async (id) => {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  },
};

export default userRepository;
