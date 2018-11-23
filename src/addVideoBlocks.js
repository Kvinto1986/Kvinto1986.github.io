/* eslint-disable no-undef */

module.exports = () => {
  for (let i = 0; i < listContainerArrBig.length; i += 1) {
    listContainerArrBig[i].innerHTML = `${i + 1}`;
    if (i === 0) {
      listContainerArrBig[i].style.backgroundColor = 'gold';
    }
  }
  for (let i = 0; i < listContainerArrSmall.length; i += 1) {
    listContainerArrSmall[i].innerHTML = `${i + 1}`;
    if (i === 0) {
      listContainerArrMid[i].style.backgroundColor = 'gold';
    }
  }
  for (let i = 0; i < listContainerArrMid.length; i += 1) {
    listContainerArrMid[i].innerHTML = `${i + 1}`;
    if (i === 0) {
      listContainerArrSmall[i].style.backgroundColor = 'gold';
    }
  }
};
