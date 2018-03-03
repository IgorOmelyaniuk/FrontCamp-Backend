import axios from 'axios';

export const FETCH_BLOGS = 'FETCH_BLOGS';
export const FETCH_BLOG = 'FETCH_BLOG'; 
export const ADD_BLOG = 'ADD_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';


const API_URL = 'http://localhost:4200/api/blogs'

export const fetchBlogs = () => {
    const request = axios.get(`${API_URL}`)

    return {
        type: FETCH_BLOGS,
        payload: request
    }
}

export const addBlog = (values, cb) => {
    const request = axios.post(`${API_URL}`, values)
        .then(() => cb())

    return {
        type: ADD_BLOG,
        payload: request
    }
}

export const deleteBlog = id => {
    const request = axios.delete(`${API_URL}/${id}`)

    return {
        type: DELETE_BLOG,
        payload: request
    }
}

export const fetchBlog = id => {
    const request = axios.get(`${API_URL}/${id}`)

    return {
        type: FETCH_BLOG,
        payload: id
    }
}

export const editBlog = (values, id, cb) => {
    const request = axios.put(`${API_URL}/${id}`, values)
        .then(() => cb())

    return {
        type: EDIT_BLOG,
        payload: request
    }
}