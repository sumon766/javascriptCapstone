import axios from 'axios';

const APP_ID = 'zX9lc5HNiZeTfJrwouGw';

const INV_COMMENT_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;



export const getData = (url) => fetch(url).then((res) => res.json());

export const postData = (url, data) => fetch(url, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
});



const postComment = async (url, comment) => {
    try {
        const result = await axios.post(url, comment);
        console.log(result, 'jkdjgkgj 000');
        return result;
    } catch (error) {
        throw new Error('Something went wrong, comment not created');
    }
};

export const addComment = async (movieId, userName, message) => {
    try {
        const comment = { item_id: movieId, username: userName, comment: message };

        const result = await postComment(INV_COMMENT_URL, comment);
        console.log(result, 1122);
        return result;
    } catch (error) {
        throw new Error('Something went wrong, comment not created');
    }
};

export const getComments = async (movieId) => {
    try {
        const result = await axios.get(`${INV_COMMENT_URL}?item_id=${movieId}`);
        console.log(result, 'hjghdjhg 0000 11111');
        return result.data;
    } catch (error) {
        throw new Error("Something went wrong, Can't fetch comments!!");
    }
};
