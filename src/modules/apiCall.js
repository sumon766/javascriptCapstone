const address = 'https://api.tvmaze.com/show';
const getMovies = async () => {
    const list = await fetch(address);
    const movies = await list.json();
    return movies;
}

const showMovies = async () => {
    const received = await getMovies();
    console.log(received);
    const programs = document.getElementById('programs');

    for (let i = 0; i < received.length; i += 1) {
        if(received[i].id < 7) {
            let program = document.createElement('div');
            program.className = 'program';

            let image = document.createElement('img');
            image.src = received[i].image.medium;
            program.appendChild(image);

            let title = document.createElement('h2');
            title.innerText = received[i].name;
            program.appendChild(title);

            let likeCount = document.createElement('div');
            likeCount.className = 'like-count';
            program.appendChild(likeCount);

            let likeButton = document.createElement('i');
            likeButton.className = 'fa fa-heart-o like';
            likeCount.appendChild(likeButton);

            let likeNumber = document.createElement('p');
            likeNumber.innerText = '5 likes';
            likeCount.appendChild(likeNumber);

            let commentButton = document.createElement('button');
            commentButton.id = 'comment-button-' + received[i].id;
            commentButton.type = 'button';
            commentButton.innerText = 'Comment';
            program.appendChild(commentButton);

            let moviesModal = document.createElement('div');
            moviesModal.className = 'modal';
            moviesModal.id = 'comment-modal-' + received[i].id;
            program.appendChild(moviesModal);

            let modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            moviesModal.appendChild(modalContent);

            let close = document.createElement('span');
            close.className = `close${received[i].id}`;
            close.id = 'close';
            close.innerHTML = '&times;';
            modalContent.appendChild(close);

            let modalImageTitle = document.createElement('div');
            modalImageTitle.className = 'modal-image-title';
            modalContent.appendChild(modalImageTitle);

            let modalImage = document.createElement('img');
            modalImage.src = received[i].image.medium;
            modalImageTitle.appendChild(modalImage);

            let modalDescription = document.createElement('div');
            modalDescription.className = 'modal-description';
            modalImageTitle.appendChild(modalDescription);

            let modalTitle = document.createElement('h2');
            modalTitle.innerText = received[i].name;
            modalDescription.appendChild(modalTitle);

            let storyLine = document.createElement('p');
            storyLine.innerHTML = received[i].summary;
            modalDescription.appendChild(storyLine);

            // Manual Comments Here
            let comments = document.createElement('h2');
            comments.innerText = 'Comments (2)';
            modalDescription.appendChild(comments);

            let comment1 = document.createElement('p');
            comment1.innerHTML = '<span>22/03/2023 </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            modalDescription.appendChild(comment1);

            let comment2 = document.createElement('p');
            comment2.innerHTML = '<span>20/03/2023 </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            modalDescription.appendChild(comment2);
            // Manual Comments Here

            // Comment Form Starts Here
            let form = document.createElement('form');
            form.id = 'comment-form';
            modalDescription.appendChild(form);

            let fieldset = document.createElement('fieldset');
            form.appendChild(fieldset);

            let legend = document.createElement('legend');
            legend.innerText = 'Add Comment';
            fieldset.appendChild(legend);

            let name = document.createElement('input');
            name.type = 'text';
            name.id = 'name';
            name.name = 'name';
            name.placeholder = 'Your Name';
            name.required = 'required';
            fieldset.appendChild(name);

            let commentText = document.createElement('textarea');
            commentText.name = 'comment';
            commentText.id = 'comment';
            commentText.placeholder = 'Your Comment';
            fieldset.appendChild(commentText);

            let submit = document.createElement('input');
            submit.type = 'submit';
            submit.name = 'submit';
            submit.value = 'Submit';
            submit.id = 'submit';
            fieldset.appendChild(submit);
            // Comment Form Starts Here

            programs.appendChild(program);

            let modal = document.getElementById(`comment-modal-${received[i].id}`);
            let btn = document.getElementById(`comment-button-${received[i].id}`);
            let span = document.getElementsByClassName(`close${received[i].id}`)[0];
        
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
        }
    }
}

export default showMovies;