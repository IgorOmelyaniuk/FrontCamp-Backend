import { FILTER_BY_AUTHOR } from '../constants';

export default function(state='', action) {
    switch (action.type) {
    case FILTER_BY_AUTHOR:
        return action.payload;
    default:
        return state;
    }
}