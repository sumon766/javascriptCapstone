import { addComment, getComments } from './commentAPI.js';

const commentPop = (movie, program) => {
  const moviesModal = document.createElement('div');
  moviesModal.className = 'modal';
  moviesModal.id = `comment-modal-${movie.id}`;
  program.appendChild(moviesModal);

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  moviesModal.appendChild(modalContent);

  const close = document.createElement('span');
  close.className = `close${movie.id}`;
  close.id = 'close';
  close.innerHTML = '&times;';
  modalContent.appendChild(close);

  const modalImageTitle = document.createElement('div');
  modalImageTitle.className = 'modal-image-title';
  modalContent.appendChild(modalImageTitle);

  const modalImage = document.createElement('img');
  modalImage.src = movie.image.medium;
  modalImageTitle.appendChild(modalImage);

  const modalDescription = document.createElement('div');
  modalDescription.className = 'modal-description';
  modalImageTitle.appendChild(modalDescription);

  const modalTitle = document.createElement('h2');
  modalTitle.innerText = movie.name;
  modalDescription.appendChild(modalTitle);

  const storyLine = document.createElement('p');
  storyLine.innerHTML = movie.summary;
  modalDescription.appendChild(storyLine);
  const commentList = document.createElement('div');
  commentList.className = 'comment-list';
  modalDescription.appendChild(commentList);

  const commentCountContainer = document.createElement('div');
  commentCountContainer.className = 'count-container';
  commentList.appendChild(commentCountContainer);
  const comments = document.createElement('h2');

  // Manual Comments Here
  getComments(movie.id).then((data) => {
    const count = data.length;
    comments.textContent = `Comments (${count})`;
    commentCountContainer.appendChild(comments);
    data.forEach((comment) => {
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      commentList.appendChild(commentContainer);
      const commentorName = document.createElement('h4');
      commentorName.textContent = ` ${comment.username} `;
      commentorName.className = 'commentor-name';
      const commentDate = document.createElement('p');
      commentDate.textContent = ` ${comment.creation_date} `;
      commentDate.className = 'comment-date';
      const commentMessage = document.createElement('p');
      commentMessage.textContent = ` ${comment.comment} `;
      commentMessage.className = 'comment-message';
      commentContainer.appendChild(commentorName);
      commentContainer.appendChild(commentDate);
      commentContainer.appendChild(commentMessage);
    });
  });
  // Manual Comments Here

  // Comment Form Here
  const form = document.createElement('form');
  form.id = 'comment-form';
  modalDescription.appendChild(form);

  const fieldset = document.createElement('fieldset');
  form.appendChild(fieldset);

  const legend = document.createElement('legend');
  legend.innerText = 'Add Comment';
  fieldset.appendChild(legend);

  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.name = 'name';
  name.placeholder = 'Your Name';
  name.required = 'required';
  name.className = 'comment-input';
  fieldset.appendChild(name);

  const commentText = document.createElement('textarea');
  commentText.name = 'comment';
  commentText.id = 'comment';
  commentText.placeholder = 'Your Comment';
  commentText.className = 'comment-message';
  fieldset.appendChild(commentText);

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.name = 'submit';
  submit.value = 'Submit';
  submit.id = 'submit';
  fieldset.appendChild(submit);

  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (name.value && commentText.value) {
      addComment(movie.id, name.value, commentText.value);
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      const commentorName = document.createElement('h4');
      commentorName.textContent = name.value;
      commentorName.className = 'commentor-name';
      const commentMessage = document.createElement('p');
      commentMessage.textContent = commentText.value;
      commentMessage.className = 'comment-message';
      commentContainer.appendChild(commentorName);
      commentContainer.appendChild(commentMessage);
      commentList.appendChild(commentContainer);

      const items = document.querySelectorAll(`#comment-modal-${movie.id} .comment-container`);
      const itemNum = items.length;
      const comments = document.createElement('h2');
      comments.textContent = `Comments (${itemNum})`;

      while (commentCountContainer.firstChild) {
        commentCountContainer.removeChild(commentCountContainer.firstChild);
      }

      commentCountContainer.appendChild(comments);
    }
    name.value = '';
    commentText.value = ''; 
});  
  // Comment Form Here
};

export default commentPop;