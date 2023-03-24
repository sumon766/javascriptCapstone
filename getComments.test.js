import { getComments } from './src/modules/commentAPI.js';

test('Test of comment count function', () => {
  expect(getComments(2)).toBeDefined();
});