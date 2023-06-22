import { connectDB } from "./database/index.js";

// Connect database.

connectDB.connect();

const users = [
    { name: 'User 1', address: 'abc' },
    { name: 'User 2', address: 'abc' },
    { name: 'User 3', address: 'abc' },
    { name: 'User 4', address: 'abc' },
    { name: 'User 5', address: 'abc' },
    { name: 'User 6', address: 'abc' },
    { name: 'User 7', address: 'abc' },
];

try {

  for (const user of users) {
    const insertQuery = `INSERT INTO users SET ?`
    connectDB.query(insertQuery, user, (error) => {
      if (error) throw error;
      console.log("Record created", user.name)
    })
  }

} catch (e) {

  console.error(e);

}