const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    // res.end("Hello World!")
});

app.listen(3000);