const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'index.html')));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle H1 update request
app.post('/update-h1', (req, res) => {
    const { text } = req.body;
    // Here you can process the text or store it if needed
    res.json({ text });
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});