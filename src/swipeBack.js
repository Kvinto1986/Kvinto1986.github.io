/* eslint-disable no-undef */

module.exports = () => {
  if (mainContainerBig.style.display === 'flex' || mainContainerMid.style.display === 'flex' || mainContainerSmall.style.display === 'flex') {
    if (mainContainerArr[0].style.display === 'flex') {
      if (videoCountBig > 0) {
        videoContainerArrBig[videoCountBig].style.transform = 'scale(0)';
        videoContainerArrBig[videoCountBig].style.opacity = '0';
        videoContainerArrBig[videoCountBig - 1].style.opacity = '1';
        videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(1)';
        videoContainerArrMid[videoCountMid].style.transform = 'scale(0)';
        videoContainerArrMid[videoCountMid].style.opacity = '0';
        videoContainerArrMid[videoCountMid - 2].style.opacity = '1';
        videoContainerArrMid[videoCountMid - 2].style.transform = 'scale(1)';
        videoContainerArrSmall[videoCountSmall].style.transform = 'scale(0)';
        videoContainerArrSmall[videoCountSmall].style.opacity = '0';
        videoContainerArrSmall[videoCountSmall - 4].style.opacity = '1';
        videoContainerArrSmall[videoCountSmall - 4].style.transform = 'scale(1)';
        listCountBig -= 1;
        listCountMid -= 2;
        listCountSmall -= 4;
        videoCountBig -= 1;
        videoCountMid -= 2;
        videoCountSmall -= 4;
      }
    }


    if (mainContainerArr[1].style.display === 'flex') {
      if (videoCountMid > 0) {
        videoContainerArrMid[videoCountMid].style.transform = 'scale(0)';
        videoContainerArrMid[videoCountMid].style.opacity = '0';
        videoContainerArrMid[videoCountMid - 1].style.opacity = '1';
        videoContainerArrMid[videoCountMid - 1].style.transform = 'scale(1)';


        if (videoCountMid % 2 === 0) {
          videoContainerArrBig[videoCountBig - 1].style.opacity = '1';
          videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(1)';
          videoContainerArrBig[videoCountBig].style.transform = 'scale(0)';
          videoContainerArrBig[videoCountBig].style.opacity = '0';
          videoCountBig -= 1;
          listCountBig -= 1;
        }


        videoContainerArrSmall[videoCountSmall].style.transform = 'scale(0)';
        videoContainerArrSmall[videoCountSmall].style.opacity = '0';

        videoContainerArrSmall[videoCountSmall - 2].style.opacity = '1';
        videoContainerArrSmall[videoCountSmall - 2].style.transform = 'scale(1)';
        videoCountSmall -= 2;
        videoCountMid -= 1;
        listCountMid -= 1;
        listCountSmall -= 2;
      }
    }

    if (mainContainerArr[2].style.display === 'flex') {
      if (videoCountSmall > 0) {
        videoContainerArrSmall[videoCountSmall - 1].style.opacity = '1';
        videoContainerArrSmall[videoCountSmall - 1].style.transform = 'scale(1)';
        videoContainerArrSmall[videoCountSmall].style.transform = 'scale(0)';
        videoContainerArrSmall[videoCountSmall].style.opacity = '0';

        if (videoCountSmall % 2 === 0) {
          videoContainerArrMid[videoCountMid - 1].style.opacity = '1';
          videoContainerArrMid[videoCountMid - 1].style.transform = 'scale(1)';
          videoContainerArrMid[videoCountMid].style.transform = 'scale(0)';
          videoContainerArrMid[videoCountMid].style.opacity = '0';
          videoCountMid -= 1;
          listCountMid -= 1;
        }
        if (videoCountSmall % 4 === 0) {
          videoContainerArrBig[videoCountBig - 1].style.opacity = '1';
          videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(1)';
          videoContainerArrBig[videoCountBig].style.transform = 'scale(0)';
          videoContainerArrBig[videoCountBig].style.opacity = '0';
          videoCountBig -= 1;
          listCountBig -= 1;
        }
        listCountSmall -= 1;
        videoCountSmall -= 1;
      }
    }

    if (listCountBig < 0) {
      for (let i = 0; i < listContainerArrBig.length; i += 1) {
        listContainerArrBig[i].innerHTML = `${videoCountBig + i - 2}`;
        listContainerArrBig[i].style.backgroundColor = 'whitesmoke';
      }
      listContainerArrBig[3].style.backgroundColor = 'gold';
      listCountBig = 3;
    } else if (listCountBig < 3 && listCountBig > -1) {
      listContainerArrBig[listCountBig + 1].style.backgroundColor = 'whitesmoke';
      listContainerArrBig[listCountBig].style.backgroundColor = 'gold';
    }

    if (listCountMid < 0) {
      if (mainContainerArr[0].style.display === 'flex') {
        for (let i = 0; i < listContainerArrMid.length; i += 1) {
          listContainerArrMid[i].innerHTML = `${videoCountMid + i - 1}`;
          listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
        }
      } else {
        for (let i = 0; i < listContainerArrMid.length; i += 1) {
          listContainerArrMid[i].innerHTML = `${videoCountMid + i - 2}`;
          listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
        }
      }
      listContainerArrMid[4 - Math.abs(listCountMid)].style.backgroundColor = 'gold';
      listCountMid = 4 - Math.abs(listCountMid);
    } else if (listCountMid < 3 && listCountMid > -1) {
      if (mainContainerArr[0].style.display === 'flex') {
        listContainerArrMid[listCountMid + 2].style.backgroundColor = 'whitesmoke';
        listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
      }
      if (mainContainerArr[2].style.display === 'flex') {
        if ((videoCountSmall + 1) % 2 === 0) listContainerArrMid[listCountMid + 1].style.backgroundColor = 'whitesmoke';
        listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
      } else {
        listContainerArrMid[listCountMid + 1].style.backgroundColor = 'whitesmoke';
        listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
      }
    }


    if (listCountSmall < 0) {
      if (mainContainerArr[0].style.display === 'flex') {
        for (let i = 0; i < listContainerArrSmall.length; i += 1) {
          listContainerArrSmall[i].innerHTML = `${videoCountSmall + i + 1}`;
          listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
        }
      } else if (mainContainerArr[1].style.display === 'flex') {
        for (let i = 0; i < listContainerArrSmall.length; i += 1) {
          listContainerArrSmall[i].innerHTML = `${videoCountSmall + i - 1}`;
          listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
        }
      } else if (mainContainerArr[2].style.display === 'flex') {
        for (let i = 0; i < listContainerArrSmall.length; i += 1) {
          listContainerArrSmall[i].innerHTML = `${videoCountSmall + i - 2}`;
          listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
        }
      }
      listContainerArrSmall[4 - Math.abs(listCountSmall)].style.backgroundColor = 'gold';
      listCountSmall = 4 - Math.abs(listCountSmall);
    } else if (listCountSmall < 3 && listCountSmall > -1) {
      if (mainContainerArr[1].style.display === 'flex') {
        listContainerArrSmall[listCountSmall + 2].style.backgroundColor = 'whitesmoke';
        listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';
      } else {
        listContainerArrSmall[listCountSmall + 1].style.backgroundColor = 'whitesmoke';
        listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';
      }
    }
  }
};
