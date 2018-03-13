import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogItem = ({blog, deleteBlog}) => {
    return (
        <div className="card" key={blog._id}>
            <div className="card-block">
                <h4 className="card-title">{blog.title}</h4>
                <p className="card-text">{blog.text}</p>
                <h5 className="card-author">{blog.author}</h5>
                <Link to={`/blogs/${blog._id}/edit`} className="btn btn-success">Edit</Link>
                <button style={{marginLeft: '10px'}} onClick={() => deleteBlog(blog._id)} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BlogItem;

BlogItem.propTypes = {
    blog:  PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        author: PropTypes.string,
    }),
};