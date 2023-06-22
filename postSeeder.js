import { connectDB } from "./database/index.js";
import readline from 'readline'

connectDB.connect();

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInput.question(`Enter user id to create posts for: `, userId => {
    const posts = [
        { post: 'Post 1', userId: userId },
        { post: 'Post 2', userId: userId },
        { post: 'Post 3', userId: userId },
        { post: 'Post 4', userId: userId },
    ];
    try {
        for (const post of posts) {
            const insertQuery = `INSERT INTO posts SET ?`
            connectDB.query(insertQuery, post, (error) => {
                if (error) throw error;
                console.log("Record created", post.post)
            })
        }
    } catch (e) {
        console.error(e);
    }
    readInput.close()
})


