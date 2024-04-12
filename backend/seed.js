const db = require("./config/db");
const commentsData = require("./data/comments.json");
const createTable = `CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) DEFAULT 'Admin',
    text TEXT DEFAULT '',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes INT DEFAULT 0,
    image VARCHAR(255) DEFAULT ''
);`;

async function importData() {
  try {
    await db.query(createTable);
    for (const comment of commentsData.comments) {
      const { author, text, date, likes, image } = comment;
      await db.query(
        "INSERT INTO comments (author, text, date, likes, image) VALUES ($1, $2, $3, $4, $5)",
        [author, text, date, likes, image]
      );
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

async function destroyData() {
  try {
    await db.query("DROP TABLE IF EXISTS comments");
    console.log("Database destroyed successfully.");
  } catch (error) {
    console.error("Error destroying database:", error);
  }
}

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
