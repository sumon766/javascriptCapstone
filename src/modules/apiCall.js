import commentPop from './commentPopup';

const address = 'https://api.tvmaze.com/show';
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

      const likeCount = document.createElement('div');
      likeCount.className = 'like-count';
      program.appendChild(likeCount);

      const likeButton = document.createElement('i');
      likeButton.className = 'fa fa-heart-o like';
      likeCount.appendChild(likeButton);

      const likeNumber = document.createElement('p');
      likeNumber.innerText = '5 likes';
      likeCount.appendChild(likeNumber);

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