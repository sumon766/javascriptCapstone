import { getData } from './commentAPI.js';

const address = 'https://api.tvmaze.com/show';
const movieCounter = () => {
  const counterSpan = document.getElementById('movie-count');  
  window.addEventListener('load', () => {
    var items = document.getElementsByClassName('program');
    var numItems = items.length;
    counterSpan.textContent = `(${numItems})`;
  });
};

export default movieCounter;