import React from 'react'
import './app.less'
import BlogsList from '../components/blogs-list'
import AddBlog from '../components/add-blog'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4100/blogs')
            .then(resp => resp.json())
            .then(blogs => this.setState({blogs}))
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
            .then(data => this.setState({blogs: this.state.blogs.concat(data)}))
    }

    removeBlog = _id => {
        fetch(`http://localhost:4100/blogs/${_id}`, {method: 'delete'})
            .then(resp => resp.json())
            .then(data => this.setState({blogs: this.state.blogs.filter(blog => blog._id !== data._id)}))
    }

    render() {
        return (
            <div>
                <BlogsList 
                    removeBlog={this.removeBlog}
                    getBlogIdForUpdate={this.getBlogIdForUpdate}
                    addBlog={this.addBlog}
                    blogs={this.state.blogs}
                />
                <AddBlog addBlog={this.addBlog}/>
            </div>
        ) 

                
    }
}

export default App