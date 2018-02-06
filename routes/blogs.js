const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
    Blog.find().then(blogs => res.render('blogs/blogs', { blogs}));
});

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id).then(blog => res.render('blog/blog', { blog}));
});

// router.post('/blogs', (req, res) => {
//     const article = {
//         id: +req.body.id,
//         title: req.body.title,
//         text: req.body.text,
//         // date: req.body.date,
//         author: req.body.author
//     }
//     blogs.push(article);
//     res.json(article)
// });

// router.put('/blogs/:id', (req, res) => {
//     const id = +req.params.id;
//     const updatedArticle = req.body;
//     blogs.forEach(blog => {
//         if (id === blog.id) {
//             blog = updatedArticle;
//         }
//     })
//     res.json(updatedArticle);
// })

// router.delete('/blogs/:id', (req, res) => {
//     const id = +req.params.id;
//     const index = blogs.findIndex(blog => id === blog.id);
//     const deletedArticle = blogs[index];
//     blogs.splice(index, 1);
//     res.json(deletedArticle);
// })

module.exports = router;