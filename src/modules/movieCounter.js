
import { getData } from "../modules/commentAPI"
const address = 'https://api.tvmaze.com/show';
const movieCounter = () => {
    const counterSpan = document.getElementById('movie-count');
    getData(address).then((res) => {
        counterSpan.textContent = `(${res.length})`;
    });
};


export default movieCounter