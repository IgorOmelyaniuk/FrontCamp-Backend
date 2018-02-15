import React from 'react'
import './app.less'
import BlogsList from '../components/blogs-list'

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

    removeBlogHandler = (id) => {
        fetch(`http://localhost:4100/blogs/${id}`, {method: 'delete'})
            .then(resp => resp.json())
            .then(data => this.setState({blogs: this.state.blogs.filter(blog => blog._id !== data._id)}))
    }

    render() {
        return <BlogsList 
                    removeBlogHandler={this.removeBlogHandler}
                    blogs={this.state.blogs}
                />
    }
}

export default App