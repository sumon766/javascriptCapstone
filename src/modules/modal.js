const modal = () => {
  const modal = document.getElementById('comment-modal');
  const btn = document.getElementById('comment-button');
  const span = document.getElementsByClassName('close')[0];

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
};

export default modal;