import axios from 'axios';

import {
    API_URL,
    FETCH_BLOGS_FULFILLED,
    ADD_BLOG_FULFILLED,
    DELETE_BLOG_FULFILLED,
    EDIT_BLOG_FULFILLED,
    FILTER_BY_AUTHOR
} from '../constants';

export const fetchBlogs = () => dispatch => {
    axios.get(`${API_URL}`)
        .then(res => dispatch({type: FETCH_BLOGS_FULFILLED, payload: res.data}))
}

export const addBlog = (values, cb) => dispatch => {  
    axios.post(`${API_URL}`, values)
        .then(res => dispatch({type: ADD_BLOG_FULFILLED, payload: res.data}))
        .then(() => cb())
}

export const deleteBlog = id => dispatch => {
    axios.delete(`${API_URL}/${id}`)
        .then(res => dispatch({type: DELETE_BLOG_FULFILLED, payload: res.data}))
}

export const editBlog = (values, id, cb) => dispatch => {
    axios.put(`${API_URL}/${id}`, values)
        .then(res => dispatch({type: EDIT_BLOG_FULFILLED, payload: res.data}))
        .then(() => cb())
}

export const filterByAuthor = author => {
    return {
        type: FILTER_BY_AUTHOR,
        payload: author
    }
}