const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PG_PORT,
});
module.exports = {
  query: async (text, params) => {
    const client = await pool.connect();
    try {
      res = await client.query(text, params);
      return res;
    } finally {
      client.release();
    }
  },
};
