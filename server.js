// server.js

const express = require('express');
const schedule = require('node-schedule');
const app = express();
const PORT = process.env.PORT || 3000;

// Define an object to store notes and their creation timestamps
const notes = {};

// Define routes
app.get('/:noteId', (req, res) => {
    const noteId = req.params.noteId;
    const note = notes[noteId];
    if (note) {
        // Render a page with the note content
        res.send(`
            <html>
            <head>
                <title>Note Viewer</title>
            </head>
            <body>
                <h1>Note Content</h1>
                <p>${note.content}</p>
            </body>
            </html>
        `);
    } else {
        res.status(404).send('Note not found');
    }
});

// Schedule automatic note deletion every 5 minutes
schedule.scheduleJob('*/5 * * * *', () => {
    const currentTime = Date.now();
    for (const noteId in notes) {
        if (currentTime - notes[noteId].createdAt >= 5 * 60 * 1000) {
            delete notes[noteId];
        }
    }
    console.log('Automatic note deletion executed');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
