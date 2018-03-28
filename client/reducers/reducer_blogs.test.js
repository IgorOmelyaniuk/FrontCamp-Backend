import BlogsReducer from './reducer_blogs';
import {
    ADD_BLOG_FULFILLED,
    DELETE_BLOG_FULFILLED,
    EDIT_BLOG_FULFILLED
} from '../constants';

describe('blog reducer', () => {
    it('should handle initial state', () => {
        expect(
            BlogsReducer(undefined, {})
        ).toEqual([])
    })

    it('Add blog', () => {
        expect(
            BlogsReducer([], {
                type: ADD_BLOG_FULFILLED,
                payload: {
                    _id: '1',
                    title: 'test',
                    text: 'test',
                    author: 'test'
                }
            })
        ).toEqual([{
            _id: '1',
            title: 'test',
            text: 'test',
            author: 'test'
        }])
    })

    it('Delete blog', () => {
        expect(
            BlogsReducer([
                {
                    _id: '2',
                    title: 'test',
                    text: 'test',
                    author: 'test'
                }
            ], {
                type: DELETE_BLOG_FULFILLED,
                payload: {
                    _id: '2',
                    title: 'test',
                    text: 'test',
                    author: 'test'
                }
            })
        ).toEqual([])
    })

    it('Edit Blog', () => {
        expect(
            BlogsReducer([{
                _id: '2',
                title: 'test',
                text: 'test',
                author: 'test'
            }], {
                type: EDIT_BLOG_FULFILLED,
                payload: {
                    _id: '2',
                    title: 'test 2',
                    text: 'test 2',
                    author: 'test 2'
                }
            })
        ).toEqual([{
            _id: '2',
            title: 'test 2',
            text: 'test 2',
            author: 'test 2'
        }])
    })
})