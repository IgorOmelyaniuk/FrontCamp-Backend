
import React, { Component } from 'react'
import FilterField from './FilterField'
import BlogItem from './Blogitem'
import { Link } from 'react-router-dom'

class BlogsList extends Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            author: '',
            filteredBlogs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4200/api/blogs')
            .then(resp => resp.json())
            .then(blogs => this.setState({blogs}))
    }


    render() {
        return (
            <div className="col-8 offset-2">
                <div className="d-flex justify-content-between align-items-center">
                    <FilterField author={this.state.author} filterByAuthor={this.filterByAuthor}/>
                    <Link to="/blogs/add" className="btn btn-primary">Add post</Link>
                </div>
                <div>
                    {this.state.blogs.map(blog => {
                        return (
                            <BlogItem blog={blog} key={blog._id}/>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}

export default BlogsList