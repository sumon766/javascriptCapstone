const commentCounter = (selectCommentClass) => {
  const numcomments = selectCommentClass.length;
  return numcomments > 0 ? numcomments : 0;
};

export default commentCounter;