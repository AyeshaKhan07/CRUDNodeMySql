import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import { connectDB } from "./database/index.js";
import { getUsersWithPosts } from './queries/users.js';
import { getAllRecords } from './queries/common.js';


connectDB.connect(error => {
    if (error) throw error
    console.log("Database connected")
})

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    console.log('/api/users')
    connectDB.query(getUsersWithPosts, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

app.get('/api/items', (req, res) => {

    connectDB.query(getAllRecords('items'), (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/items/:id', (req, res) => {
    let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;

    let query = connectDB.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items', (req, res) => {
    let data = { title: req.body.title, body: req.body.body };

    let sqlQuery = "INSERT INTO items SET ?";

    let query = connectDB.query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/items/:id', (req, res) => {
    let sqlQuery = "UPDATE items SET title='" + req.body.title + "', body='" + req.body.body + "' WHERE id=" + req.params.id;

    let query = connectDB.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/items/:id', (req, res) => {
    let sqlQuery = "DELETE FROM items WHERE id=" + req.params.id + "";

    let query = connectDB.query(sqlQuery, (err, results) => {
        if (err) throw err;
        res.send(apiResponse(results));
    });
});

function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}
app.listen(3001, () => {
    console.log('Server started on port 3001...');
});