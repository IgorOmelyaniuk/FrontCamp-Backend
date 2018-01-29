const express = require('express');
const router = express.Router();

const blogs = [
    {
        id: 1,
        title: 'Article 1',
        text: 'Content 1',
        date: '20-12-2007',
        author: 'Den Smith'
    },
    {
        id: 2,
        title: 'Article 2',
        text: 'Content 2',
        date: '20-12-2017',
        author: 'Sara Spencer'
    }
]

router.get('/', (req, res) => {
    res.json(blogs)
});

router.get('/blogs', (req, res) => {
    res.json(blogs)
});

router.get('/blogs/:id', (req, res) => {
    const id = +req.params.id;
    const article = blogs.find(blog => id === blog.id);
    res.json(article);
});

router.post('/blogs', (req, res) => {
    const article = {
        id: +req.body.id,
        title: req.body.title,
        text: req.body.text,
        date: req.body.date,
        author: req.body.author
    }
    blogs.push(article);
    res.json(article)
});

router.put('/blogs/:id', (req, res) => {
    const id = +req.params.id;
    const updatedArticle = req.body;
    blogs.forEach(blog => {
        if (id === blog.id) {
            blog = updatedArticle;
        }
    })
    res.json(updatedArticle);
})

router.delete('/blogs/:id', (req, res) => {
    const id = +req.params.id;
    const index = blogs.findIndex(blog => id === blog.id);
    const deletedArticle = blogs[index];
    blogs.splice(index, 1);
    res.json(deletedArticle);
})

module.exports = router;