import { getComments } from "./src/modules/commentAPI";

test('Test of comment count function', () => {
    expect(getComments(2)).toBeDefined();
});