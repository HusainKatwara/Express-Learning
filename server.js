const express = require('express');
require('dotenv').config();

// create express app
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})