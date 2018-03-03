
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBlogs, filterByAuthor } from '../actions';

import BlogItem from './BlogItem';
import FilterField from './FilterField';

class BlogsList extends Component {

    componentDidMount() {
        this.props.fetchBlogs();
    }

    filterHandler = event => {
        const value = event.target.value;
        this.props.filterByAuthor(value)
        this.calculateFilterBlogs();
    }

    calculateFilterBlogs = () => {
        return this.props.blogs.filter(blog => {
            return blog.author.toLowerCase().indexOf(this.props.author.toLowerCase()) === 0;
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
                    <FilterField filterByAuthor={this.filterHandler}/>
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
    return { 
        blogs: state.blogs,
        author: state.author
    }
}

export default connect(mapStateToProps, { fetchBlogs, filterByAuthor })(BlogsList)