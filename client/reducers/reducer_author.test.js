import AuthorReducer from './reducer_author';
import { FILTER_BY_AUTHOR } from '../constants';

describe('author reducer', () => {
  it('should handle initial state', () => {
    expect(
      AuthorReducer(undefined, {})
    ).toEqual('')
  })

  it('should handle initial state', () => {
    expect(
      AuthorReducer('', {
        type: FILTER_BY_AUTHOR,
        payload: 'Anna'
      })
    ).toEqual('Anna')
  })
})