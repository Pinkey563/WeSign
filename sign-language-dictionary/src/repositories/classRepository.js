import pool from '../configs/db.js';

const classRepository = {
  getClasses: async (searchType, searchValue) => {
    let query = 'SELECT * FROM classes';
    let params = [];
    if (searchType && searchType !== 'all') {
      query += ` WHERE ${searchType} = $1`;
      params.push(searchValue);
    }
    query += ` 
      ORDER BY 
        CAST(regexp_replace(grade, '[^0-9]', '', 'g') AS INTEGER) ASC,
        CAST(regexp_replace(name, '[^0-9]', '', 'g') AS INTEGER) ASC,
        regexp_replace(name, 'Lớp[0-9]*', '', 'g') ASC
    `;
    const result = await pool.query(query, params);
    return result.rows;
  },

  getOptions: async (searchType) => {
    let query = '';
    switch (searchType) {
      case 'grade':
        query = 'SELECT DISTINCT grade AS value, grade AS label FROM classes ORDER BY grade';
        break;
      case 'subject':
        query = 'SELECT DISTINCT subject AS value, subject AS label FROM classes ORDER BY subject';
        break;
      case 'teacher':
        query = 'SELECT DISTINCT teacher AS value, teacher AS label FROM classes ORDER BY teacher';
        break;
      default:
        return [];
    }
    const result = await pool.query(query);
    return result.rows;
  },
};

export default classRepository;

