import React from 'react'
import './app.less'
import BlogsList from '../components/blogs-list'
import AddBlog from '../components/add-blog'
import FilterField from '../components/filter-field'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: [],
            author: '',
            filteredBlogs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4100/blogs')
            .then(resp => resp.json())
            .then(blogs => this.setState({blogs}))
    }

    filterByAuthor = event => {
        const value = event.target.value.toLowerCase();
        this.setState({
            author: event.target.value,
            filteredBlogs: this.state.blogs.filter(blog => {
                if (blog.author.toLowerCase().indexOf(value) === 0) return blog;
            })
        })
    }

    addBlog = data => {
        fetch(`http://localhost:4100/blogs/`, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => this.setState({
                blogs: this.state.blogs.concat(data),
            }))
    }

    removeBlog = _id => {
        fetch(`http://localhost:4100/blogs/${_id}`, {method: 'delete'})
            .then(resp => resp.json())
            .then(data => this.setState({blogs: this.state.blogs.filter(blog => blog._id !== data._id)}))
    }

    render() {
        return (
            <div>
                <FilterField author={this.state.author} filterByAuthor={this.filterByAuthor} />
                <BlogsList 
                    removeBlog={this.removeBlog}
                    getBlogIdForUpdate={this.getBlogIdForUpdate}
                    addBlog={this.addBlog}
                    blogs={this.state.author ? this.state.filteredBlogs : this.state.blogs}
                />
                <AddBlog addBlog={this.addBlog}/>
            </div>
        ) 
    }
}

export default App