const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.send('testing');
});

module.exports = app;
