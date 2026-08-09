const express = require('express');

const app = express();

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});
