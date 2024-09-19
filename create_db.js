const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('users.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
    console.log("Users table created or already exists.");
});

db.close();