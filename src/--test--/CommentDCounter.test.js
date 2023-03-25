import commentCounter from '../modules/commentCounter.js';

describe('comment Number', () => {
  test('Test the number of comments', () => {
    const commentsOne = [{ comment: 'Nice movie', creation_date: '2021-01-14', username: 'Mish' }, { comment: 'Good', creation_date: '2022-08-12', username: 'misikir' },
      { comment: 'Interesting movie', creation_date: '2022-11-01', username: 'amhemed' }, { comment: 'Great', creation_date: '2021-11-01', username: 'henok' }];
    expect(commentCounter(commentsOne)).toBe(4);
  });
  test('Test if there are no comments', () => {
    const CommentsTwo = [];
    expect(commentCounter(CommentsTwo)).toBe(0);
  });
});