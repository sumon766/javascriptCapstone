import './style.css';
import './images/movie.jpg';

// Movie Details Modal
var modal = document.getElementById("comment-modal");
var btn = document.getElementById("comment-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
