/* eslint-disable no-undef */

module.exports = () => {
  let tmp = 0;
  for (let i = 0; i < videoContainerArrBig.length; i += 1) {
    for (let j = tmp; j < tmp + 4; j += 1) {
      videoContainerArrBig[i].appendChild(videoElementsArrBig[j]);
    }
    tmp += 4;
  }
  tmp = 0;
  for (let i = 0; i < videoContainerArrMid.length; i += 1) {
    for (let j = tmp; j < tmp + 2; j += 1) {
      videoContainerArrMid[i].appendChild(videoElementsArrMid[j]);
    }
    tmp += 2;
  }
  tmp = 0;
  for (let i = 0; i < videoContainerArrSmall.length; i += 1) {
    for (let j = tmp; j < tmp + 1; j += 1) {
      videoContainerArrSmall[i].appendChild(videoElementsArrSmall[j]);
    }
    tmp += 1;
  }
};
