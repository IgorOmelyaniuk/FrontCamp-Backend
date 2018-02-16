import React from 'react'
import './style.less'

const BlogsList = (props) => {

    const removeBlogHandler = _id => {
        props.removeBlog(_id);
    }

    return (
        <div>
            
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {props.blogs.length > 0 ?
                        ( props.blogs.map(blog => { 
                            return (
                                <tr key={blog._id}>
                                    <td>{blog._id}</td>
                                    <td>{blog.title}</td>
                                    <td>{blog.text}</td>
                                    <td>{blog.author}</td>
                                    <td><button onClick={() => removeBlogHandler(blog._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )})
                        ) : ( <div className="empty-row">There aren't blogs by this author</div>)
                    }
                </tbody>   
            </table>
            
        </div>
    )
}

export default BlogsList