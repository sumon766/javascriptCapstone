const tvWrapper = document.getElementById("programmes")
const API_URL = 'https://api.tvmaze.com/shows';
const getData = (url) => fetch(url).then((res) => res.json());
export const displayAllData = (shows) => {
    shows.forEach((show) => {
        const movieCardDiv = document.createElement('div');
        movieCardDiv.className = 'program';
        movieCardDiv.id = show.id;
        const movieImg = document.createElement('img');
        movieImg.src = show.image.original;
        movieImg.alt = 'movie image';
        movieImg.className = 'image';
        movieCardDiv.appendChild(movieImg);

        const movieTitle = document.createElement("h2")
        movieTitle.textContent = show.name
        movieCardDiv.appendChild(movieTitle)

        const likeDiv = document.createElement('div');
        likeDiv.className = "like-count"
        const likeIcon = document.createElement('i');
        likeIcon.classList.add('fa', 'fa-heart-o');
        likeDiv.appendChild(likeIcon)
        likeDiv.textContent = "5 likes"
        movieCardDiv.appendChild(likeDiv)

        const commentBtn = document.createElement('button');
        commentBtn.id = "comment-button"
        commentBtn.textContent = 'Comment';
        commentBtn.setAttribute('type', 'button');
        commentBtn.addEventListener('click', () => {
            // setPopup(commentBtn);
        });
        movieCardDiv.appendChild(commentBtn);
        tvWrapper.appendChild(movieCardDiv);
    });
};

export const retriveAllData = () => new Promise((resolve) => {
    getData(API_URL).then((movies) => {
        displayAllData(movies);
        resolve();
    });
});