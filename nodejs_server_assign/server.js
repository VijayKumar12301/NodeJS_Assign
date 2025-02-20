const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files (CSS, JS, Images)
app.use(express.static('public'));

// Route to serve HTML file with Content-Type: text/html
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
