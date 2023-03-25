import './style.css';
import './images/movie.jpg';
import showMovies from './modules/apiCall.js';
import movieCounter from './modules/movieCounter.js';

window.onload = showMovies();
window.onload = movieCounter();