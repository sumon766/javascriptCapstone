import { getData } from '../src/modules/commentAPI.js';

const address = 'https://api.tvmaze.com/show';
const movieCounter = () => {
  getData(address).then((res) => res.length);
};

export default movieCounter;