import { getData } from "../src/modules/commentAPI";

const address = 'https://api.tvmaze.com/show';
const movieCounter = () => {
  getData(address).then((res) => {
    return res.length;
  });
};

export default movieCounter;