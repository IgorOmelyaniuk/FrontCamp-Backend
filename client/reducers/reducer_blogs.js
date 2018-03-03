import { FETCH_BLOGS, DELETE_BLOG } from '../actions'
import _ from 'lodash'

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