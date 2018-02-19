
import React from 'react'

const BlogsList = (props) => {

    const removeBlogHandler = _id => {
        props.removeBlog(_id);
    }

    return (
        <div className="col-6">
            {props.blogs.map(blog => {
                return (
                    <div className="card" key={blog._id}>
                        <div className="card-block">
                            <h4 className="card-title">{blog.title}</h4>
                            <p className="card-text">{blog.text}</p>
                            <h5 className="card-author">{blog.author}</h5>
                            <button onClick={() => removeBlogHandler(blog._id)} className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogsList