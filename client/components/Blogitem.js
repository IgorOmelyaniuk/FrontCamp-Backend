import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteBlog } from '../actions';
import { connect } from 'react-redux';

class BlogItem extends Component {

    removeBlogHandler = _id => {
        this.props.deleteBlog(_id)
    }

    render() {
        const { blog } = this.props 
        return (
            <div className="card" key={blog._id}>
                <div className="card-block">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.text}</p>
                    <h5 className="card-author">{blog.author}</h5>
                    <Link to={`/blogs/${blog._id}/edit`} className="btn btn-success">Edit</Link>
                    <button style={{marginLeft: '10px'}} onClick={() => this.removeBlogHandler(blog._id)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteBlog })(BlogItem)