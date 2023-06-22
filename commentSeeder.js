import { connectDB } from "./database/index.js";
import readline from 'readline'

connectDB.connect();

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInput.question(`Enter post id to create comments for: `, postId => {
    const comments = [
        { comment: 'Comment 1', postId: postId },
        { comment: 'Comment 2', postId: postId },
        { comment: 'Comment 3', postId: postId },
        { comment: 'Comment 4', postId: postId },
        { comment: 'Comment 5', postId: postId },
        { comment: 'Comment 6', postId: postId },
    ];
    try {
        for (const comment of comments) {
            const insertQuery = `INSERT INTO comments SET ?`
            connectDB.query(insertQuery, comment, (error) => {
                if (error) throw error;
                console.log("Record created", comment.comment)
            })
        }
    } catch (e) {
        console.error(e);
    }
    readInput.close()
})


