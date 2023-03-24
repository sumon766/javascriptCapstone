import commentPop from './commentPopup.js';
import { getData, postData, getComments } from './commentAPI.js';

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
  const programs = document.getElementById('programs');
  received.forEach((movie) => {
    if (movie.id < 51) {
      const program = document.createElement('div');
      program.className = 'program';

      const image = document.createElement('img');
      image.src = movie.image.medium;
      program.appendChild(image);

      const title = document.createElement('h2');
      title.innerText = movie.name;
      program.appendChild(title);

      const likeDiv = document.createElement('div');
      likeDiv.className = 'like-div';
      program.appendChild(likeDiv);
      const likes = document.createElement('div');
      likes.className = 'likes';
      likeDiv.appendChild(likes);
      const likeCount = document.createElement('p');
      likeCount.className = 'heart';
      likes.appendChild(likeCount);
      const likeButton = document.createElement('i');
      likeButton.className = 'fa fa-heart';
      likeCount.appendChild(likeButton);
      let hasClick = false;
      likeButton.addEventListener('click', (e) => {
        if (!hasClick) {
          e.target.classList.toggle('active');

          const value = e.target.parentElement.nextSibling.textContent;
          e.target.parentElement.nextSibling.textContent = parseInt(value, 10) + 1;
          postData(INV_LIKE_URL, { item_id: movie.id });
          hasClick = true;
        }
      });
      const likeNumber = document.createElement('p');
      getData(INV_LIKE_URL).then((res) => {
        const likes = res.filter((item) => item.item_id === movie.id);
        likeNumber.textContent = likes.length > 0 ? likes[0].likes : 0;
      });

      likeNumber.className = 'like-number';

      likes.appendChild(likeNumber);

      const comments = document.createElement('div');
      comments.className = 'comments';
      likeDiv.appendChild(comments);
      const commentCount = document.createElement('p');
      commentCount.className = 'comment-count';
      comments.appendChild(commentCount);
      const commentIcon = document.createElement('i');
      commentIcon.className = 'fa fa-comment';
      commentCount.appendChild(commentIcon);

      // getComments(movie.id).then((data) => {
      //   const commentNumber = document.createElement('p');
      //   commentNumber.className = 'comment-number';
      //   commentNumber.textContent = data.length > 0 ? data.length : 0;
      //   comments.appendChild(commentNumber);
      // });
      const commentNumber = document.createElement('p');
      commentNumber.className = 'comment-number';
      // window.addEventListener('load', () => {
      //   var commentItems = document.getElementsByClassName('comment-container');
      //   var numCommentItems = commentItems.length;
      //   commentNumber.textContent = numCommentItems;
      // });

      const commentButton = document.createElement('button');
      commentButton.id = `comment-button-${movie.id}`;
      commentButton.type = 'button';
      commentButton.innerText = 'Comment';
      program.appendChild(commentButton);

      commentPop(movie, program);

      window.onload = () => {
        var commentItems = document.getElementsByClassName('comment-container');
        var numCommentItems = commentItems.length;
        commentNumber.textContent = numCommentItems;
        // comments.appendChild(commentNumber);
      };
      comments.appendChild(commentNumber);

      programs.appendChild(program);

      const modal = document.getElementById(`comment-modal-${movie.id}`);
      const btn = document.getElementById(`comment-button-${movie.id}`);
      const span = document.getElementsByClassName(`close${movie.id}`)[0];

      btn.onclick = () => {
        modal.style.display = 'block';
      };

      span.onclick = () => {
        modal.style.display = 'none';
      };

      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  });
};

export default showMovies;