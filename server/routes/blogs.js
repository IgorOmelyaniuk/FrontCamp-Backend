import express from 'express';
import Blog from '../models/blog';

const router = express.Router();

router.get('/', (req, res, next) => {
    Blog.find()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    Blog.findById(req.params.id)
    .then(blog => res.status(200).json(blog))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    const blog = {
        title: req.body.title || 'No title',
        text: req.body.text || 'No text',
        author: req.body.author || 'No author'
    };
    const newBlog = new Blog(blog);
    newBlog.save()
    .then(blog => res.status(200).json(blog))
    .catch(err => next(err));
});

router.put('/:id', (req, res) => {
    const newBlog = req.body;
    Blog.findById(req.params.id)
    .then(blog => Object.assign(blog, newBlog))
    .then(blog => blog.save())
    .then(blog => res.status(200).json(blog))
    .catch(err => next(err));
})

router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id)
    .then(blog => res.status(200).json(blog))
    .catch(err => next(err));
});

module.exports = router;