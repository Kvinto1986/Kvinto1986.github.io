/* eslint-disable no-undef */

module.exports = () => {
  if (document.body.clientWidth <= 1200) {
  } else {
    mainContainerArr[0].style.display = 'flex';
    mainContainerArr[1].style.display = 'none';
    mainContainerArr[2].style.display = 'none';
    listContainerArr[0].style.display = 'flex';
    listContainerArr[1].style.display = 'none';
    listContainerArr[2].style.display = 'none';
  }
  if (document.body.clientWidth < 1200 && document.body.clientWidth > 550) {
    mainContainerArr[0].style.display = 'none';
    mainContainerArr[1].style.display = 'flex';
    mainContainerArr[2].style.display = 'none';
    listContainerArr[0].style.display = 'none';
    listContainerArr[1].style.display = 'flex';
    listContainerArr[2].style.display = 'none';
  }
  if (document.body.clientWidth < 550) {
    mainContainerArr[0].style.display = 'none';
    mainContainerArr[1].style.display = 'none';
    mainContainerArr[2].style.display = 'flex';
    listContainerArr[0].style.display = 'none';
    listContainerArr[1].style.display = 'none';
    listContainerArr[2].style.display = 'flex';
  }
  console.log(mainContainerArr);
};
