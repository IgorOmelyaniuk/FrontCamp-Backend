import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/database';
import cors from 'cors';
import handleRender from './handleRender';

mongoose.connect(config.database);

const app = express();
const blogs = require('./routes/blogs')

app.use(bodyParser.json());
app.use(cors());
app.use('/blogs', blogs);

app.use((err, req, res, next) => {
    res.status(500).json(err);
});

app.use(express.static('public'));
app.get('/', handleRender);

const PORT = 4200;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));