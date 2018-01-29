const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const myFormat = printf(info => `${info.timeStamp} - ${info.message}`);

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({filename: 'history.log'})
    ]
});

const app = express();

const blog = require('./routes/blog')


app.set('view engine', 'ejs');
app.use(logger.log);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    logger.info(req.method + ' ' + req.url);
    next();
})

app.use('*', blog);

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Page is not found!'
    })
})

const PORT = 4100;
app.listen(PORT, function () {
    console.log('Server is running on port ' + PORT);
})