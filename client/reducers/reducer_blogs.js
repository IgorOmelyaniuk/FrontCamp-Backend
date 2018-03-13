import {
    FETCH_BLOGS_FULFILLED,
    ADD_BLOG_FULFILLED,
    DELETE_BLOG_FULFILLED,
    EDIT_BLOG_FULFILLED
} from '../constants'

export default function(state = [], action) {
    switch(action.type) {
    case FETCH_BLOGS_FULFILLED:
        return action.payload
    case ADD_BLOG_FULFILLED:
        return [...state, action.payload]
    case DELETE_BLOG_FULFILLED:
        return state.filter(blog => blog._id !== action.payload._id)
    case EDIT_BLOG_FULFILLED:
        return state.map(blog => blog._id === action.payload._id ? action.payload  : blog)
    default:
        return state;
    }
}