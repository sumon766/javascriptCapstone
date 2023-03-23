import commentPop from './commentPopup';
import { getData, postData } from "../modules/commentAPI"
const address = 'https://api.tvmaze.com/show';
const APP_ID = 'zX9lc5HNiZeTfJrwouGw';

const INV_LIKE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;
const getMovies = async () => {
  const list = await fetch(address);
  const movies = await list.json();
  return movies;
};

const showMovies = async () => {
  const received = await getMovies();
  console.log(received);
  const programs = document.getElementById('programs');
  received.forEach((movie) => {
    if (movie.id < 7) {
      const program = document.createElement('div');
      program.className = 'program';

      const image = document.createElement('img');
      image.src = movie.image.medium;
      program.appendChild(image);

      const title = document.createElement('h2');
      title.innerText = movie.name;
      program.appendChild(title);

      const likeDiv = document.createElement('div')
      likeDiv.className = "like-div"
      const likeCount = document.createElement('p');
      likeCount.className = 'heart';
      program.appendChild(likeDiv);
      likeDiv.appendChild(likeCount)
      const likeButton = document.createElement('i');
      likeButton.classList.add('fa', 'fa-heart');
      likeCount.appendChild(likeButton);
      likeButton.addEventListener('click', (e) => {
        e.target.classList.toggle('active');

        const value = e.target.parentElement.nextSibling.textContent;
        e.target.parentElement.nextSibling.textContent = parseInt(value, 10) + 1;
        postData(INV_LIKE_URL, { item_id: movie.id });
      });
      const likeNumber = document.createElement('p');
      getData(INV_LIKE_URL).then((res) => {
        const likes = res.filter((item) => item.item_id === movie.id);
        likeNumber.textContent = likes.length > 0 ? likes[0].likes : 0;
      });

      likeNumber.className = "like-number"

      likeDiv.appendChild(likeNumber);

      const commentButton = document.createElement('button');
      commentButton.id = `comment-button-${movie.id}`;
      commentButton.type = 'button';
      commentButton.innerText = 'Comment';
      program.appendChild(commentButton);

      commentPop(movie, program);

      programs.appendChild(program);

      const modal = document.getElementById(`comment-modal-${movie.id}`);
      const btn = document.getElementById(`comment-button-${movie.id}`);
      const span = document.getElementsByClassName(`close${movie.id}`)[0];

      btn.onclick = function () {
        modal.style.display = 'block';
      };

      span.onclick = function () {
        modal.style.display = 'none';
      };

      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  });
};

export default showMovies;