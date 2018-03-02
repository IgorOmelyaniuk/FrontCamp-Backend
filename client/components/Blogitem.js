import React, { Component } from 'react'

class BlogItem extends Component {

    removeBlogHandler = _id => {
        fetch(`http://localhost:4200/blogs/${_id}`, {method: 'delete'})
            .then(resp => resp.json())
            .then(data => this.setState({blogs: this.state.blogs.filter(blog => blog._id !== data._id)},
                this.calculateFilterBlogs))
    }

    render() {
        const { blog } = this.props 
        return (
            <div className="card" key={blog._id}>
                <div className="card-block">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.text}</p>
                    <h5 className="card-author">{blog.author}</h5>
                    <button onClick={() => this.removeBlogHandler(blog._id)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogItem