import pool from '../config/database.js';

const findAll = (platform) => {
    if (platform) {
      const query = 'SELECT * FROM locations WHERE platform = $1 ORDER BY name ASC'
      return pool.query(query, [platform])
    }
    else {
      const query = 'SELECT * FROM locations ORDER BY name ASC'
      return pool.query(query)
    }
}

export default {
    findAll
}