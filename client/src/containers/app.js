import React from 'react'
import './app.less'

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

    render() {
        return (
            <div>
                <ul>
                    {this.state.blogs.map(blog =>
                        <li key={blog._id}>{blog.title}: {blog.text}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default App