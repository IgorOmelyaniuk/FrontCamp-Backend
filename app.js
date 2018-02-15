const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors')

mongoose.connect(config.database);

const app = express();
const blogs = require('./routes/blogs')

app.use(bodyParser.json());
app.use(cors());
app.use('/blogs', blogs);

app.use((err, req, res, next) => {
    res.status(500).json(err);
});

app.get('/', (req, res) => res.status(200).send());

const PORT = 4100;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));