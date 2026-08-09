const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

app.get('/hello', (req, res) => {
    // Accessing query parameters from the request
    const name = req.query.name;
    const age = req.query.age;

    // Using the query parameters to customize the response
    res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
});

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
