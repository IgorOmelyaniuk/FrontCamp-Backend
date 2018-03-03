
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';

import BlogItem from './BlogItem';
import FilterField from './FilterField';

class BlogsList extends Component {
    constructor() {
        super();
        this.state = {
            author: ''
        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    filterByAuthor = event => {
        const value = event.target.value;
        this.setState({author: event.target.value}, this.calculateFilterBlogs);
        this.calculateFilterBlogs();
    }

    calculateFilterBlogs = () => {
        return this.props.blogs.filter(blog => {
            return blog.author.toLowerCase().indexOf(this.state.author.toLowerCase()) === 0;
        });
    }

    renderBlogs() {
        return this.calculateFilterBlogs().map(blog => {
            return <BlogItem key={blog._id} blog={blog} />
        })
    }

    render() {
        
        return (
            <div className="col-8 offset-2">
                <div className="d-flex justify-content-between align-items-center">
                    <FilterField filterByAuthor={this.filterByAuthor}/>
                    <Link to="/blogs/add" className="btn btn-primary">Add post</Link>
                </div>
                <div>
                    {this.renderBlogs()}
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return { blogs: state.blogs }
}

export default connect(mapStateToProps, { fetchBlogs })(BlogsList)