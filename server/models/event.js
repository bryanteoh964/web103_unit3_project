import { pool } from '../config/database.js';

const findAll = (platform) => {
    if (platform) {
      const query = 'SELECT * FROM events WHERE platform = $1 ORDER BY title ASC'
      return pool.query(query, [platform])
    }
    else {
      const query = 'SELECT * FROM events ORDER BY title ASC'
      return pool.query(query)
    }
  }
  
  const findOne = (id) => {
    const query = 'SELECT * FROM events WHERE id = $1'
    return pool.query(query, [id])
  }
  
  export default {
    findAll,
    findOne
  }