const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

const app = express();
const blogs = require('./routes/blogs')

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use('/blogs', blogs);

app.use((err, req, res, next) => {
    res.status(500).json(err);
});

app.get('/', (req, res) => res.status(200).send('Hello'));

const PORT = 4100;
app.listen(PORT, function () {
    console.log('Server is running on port ' + PORT);
});