import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    id: {type: String },
    title: { type: String, required: true},
    author: { type: String, required: true },
    text: { type: String, required: true}
});

module.exports = mongoose.model('Blog', blogSchema, 'blogs');