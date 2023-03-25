const commentCounter = (selectCommentClass) => {
    let numcomments = selectCommentClass.length;
    return numcomments > 0 ? numcomments : 0;
}

export default commentCounter;