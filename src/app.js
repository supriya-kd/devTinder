const express = require('express');
const app = express();

app.use('/test', (req, res) => {
    res.send('Hello World from Server!!');
});

app.use('/', (req, res) => {
    res.send('Hello World from <b>Home');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});