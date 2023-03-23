import './style.css';
import './images/movie.jpg';
import showMovies from './modules/apiCall';
import movieCounter from './modules/movieCounter';

window.onload = showMovies();
window.onload = movieCounter()