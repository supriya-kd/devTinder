const express = require('express');
const app = express();

app.use('/test/2', (req, res) => {
    res.send('Hello World from <b>Test New</b>!!');
});

app.use('/test', (req, res) => {
    res.send('Hello World from <b>Test</b>!!');
});

app.use('/', (req, res) => {
    res.send('Hello World from <b>Home</b>!!!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});