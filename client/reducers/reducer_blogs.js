import { FETCH_BLOGS, DELETE_BLOG, ADD_BLOG } from '../actions'

export default function(state = [], action) {
    switch(action.type) {
    case FETCH_BLOGS:
        return action.payload.data
    case DELETE_BLOG:
        return state.filter(blog => blog._id !== action.payload.data._id)
    default:
        return state;
    }
}