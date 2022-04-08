import { connectDB } from "./database/index.js";

// Connect database.

connectDB.connect();

const items = [

  { title: 'Item 1', body: 'Body 1' },
  { title: 'Item 2', body: 'Body 2' },
  { title: 'Item 3', body: 'Body 3' },
  { title: 'Item 4', body: 'Body 4' },
  { title: 'Item 5', body: 'Body 5' },
  { title: 'Item 6', body: 'Body 6' },
  { title: 'Item 7', body: 'Body 7' },
];

try {

  for (const item of items) {
    const insertQuery = `INSERT INTO items SET ?`
    connectDB.query(insertQuery, item, (error) => {
      if (error) throw error;
      console.log("Record created", item.title)
    })
  }

} catch (e) {

  console.error(e);

}