const movieCounter = async () => {
  await new Promise(resolve => window.addEventListener('load', resolve));
  const items = document.getElementsByClassName('program');
  const numItems = items.length;
  return numItems;
};

export default movieCounter;