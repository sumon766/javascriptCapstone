const movieCounter = () => {
  const counterSpan = document.getElementById('movie-count');
  window.addEventListener('load', () => {
    const items = document.getElementsByClassName('program');
    const numItems = items.length;
    counterSpan.textContent = `(${numItems})`;
  });
};

export default movieCounter;