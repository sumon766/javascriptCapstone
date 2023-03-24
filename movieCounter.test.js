import movieCounter from './__mocks__/movieCounter.js';

test('counting movies', async () => {
  document.addEventListener('DOMContentLoaded', async () => {
    const numMovies = await movieCounter();
    expect(numMovies).toBe(48);
  });
});