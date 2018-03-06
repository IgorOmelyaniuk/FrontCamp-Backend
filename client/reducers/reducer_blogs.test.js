import BlogsReducer from './reducer_blogs';
import { DELETE_BLOG } from '../actions';

describe('blog reducer', () => {
    it('should handle initial state', () => {
        expect(
            BlogsReducer(undefined, {})
        ).toEqual([])
    })

    it('DELETE BLOG', () => {
        expect(
            BlogsReducer([], {
                type: DELETE_BLOG,
                payload: {
                    id: '1',
                    title: 'test',
                    text: 'test',
                    author: 'test'
                }
            })
        ).toEqual([])
    })
})