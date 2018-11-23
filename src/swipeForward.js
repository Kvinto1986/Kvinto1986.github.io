/* eslint-disable no-undef */

module.exports = (lazyLoad, buildDom, addNewVideoBlocks) => {
  if (mainContainerBig.style.display === 'flex' || mainContainerMid.style.display === 'flex' || mainContainerSmall.style.display === 'flex') {
    if (mainContainerArr[0].style.display === 'flex') {
      videoCountBig += 1;
      videoCountMid += 2;
      videoCountSmall += 4;
      videoContainerArrBig[videoCountBig].style.opacity = '1';
      videoContainerArrBig[videoCountBig].style.transform = 'scale(1)';
      videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(0)';
      videoContainerArrBig[videoCountBig - 1].style.opacity = '0';

      videoContainerArrMid[videoCountMid - 2].style.transform = 'scale(0)';
      videoContainerArrMid[videoCountMid - 2].style.opacity = '0';

      videoContainerArrMid[videoCountMid].style.opacity = '1';
      videoContainerArrMid[videoCountMid].style.transform = 'scale(1)';


      videoContainerArrSmall[videoCountSmall - 4].style.transform = 'scale(0)';
      videoContainerArrSmall[videoCountSmall - 4].style.opacity = '0';

      videoContainerArrSmall[videoCountSmall].style.opacity = '1';
      videoContainerArrSmall[videoCountSmall].style.transform = 'scale(1)';


      listCountBig += 1;
      listCountMid += 2;
      listCountSmall += 4;
    }

    if (mainContainerArr[1].style.display === 'flex') {
      videoCountMid += 1;
      videoContainerArrMid[videoCountMid].style.opacity = '1';
      videoContainerArrMid[videoCountMid].style.transform = 'scale(1)';
      videoContainerArrMid[videoCountMid - 1].style.transform = 'scale(0)';
      videoContainerArrMid[videoCountMid - 1].style.opacity = '0';

      if (videoCountMid !== 0 && videoCountMid % 2 === 0) {
        videoCountBig += 1;
        listCountBig += 1;
        videoContainerArrBig[videoCountBig].style.opacity = '1';
        videoContainerArrBig[videoCountBig].style.transform = 'scale(1)';
        videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(0)';
        videoContainerArrBig[videoCountBig - 1].style.opacity = '0';
      }
      videoCountSmall += 2;


      videoContainerArrSmall[videoCountSmall - 2].style.transform = 'scale(0)';
      videoContainerArrSmall[videoCountSmall - 2].style.opacity = '0';

      videoContainerArrSmall[videoCountSmall].style.opacity = '1';
      videoContainerArrSmall[videoCountSmall].style.transform = 'scale(1)';


      listCountMid += 1;
      listCountSmall += 2;
    }
    if (mainContainerArr[2].style.display === 'flex') {
      videoCountSmall += 1;
      videoContainerArrSmall[videoCountSmall].style.opacity = '1';
      videoContainerArrSmall[videoCountSmall].style.transform = 'scale(1)';
      videoContainerArrSmall[videoCountSmall - 1].style.transform = 'scale(0)';
      videoContainerArrSmall[videoCountSmall - 1].style.opacity = '0';
      listCountSmall += 1;
      if (videoCountSmall !== 0 && videoCountSmall % 2 === 0) {
        videoCountMid += 1;
        listCountMid += 1;
        videoContainerArrMid[videoCountMid].style.opacity = '1';
        videoContainerArrMid[videoCountMid].style.transform = 'scale(1)';
        videoContainerArrMid[videoCountMid - 1].style.transform = 'scale(0)';
        videoContainerArrMid[videoCountMid - 1].style.opacity = '0';
      }
      if (videoCountSmall !== 0 && videoCountSmall % 4 === 0) {
        videoCountBig += 1;
        listCountBig += 1;
        videoContainerArrBig[videoCountBig].style.opacity = '1';
        videoContainerArrBig[videoCountBig].style.transform = 'scale(1)';
        videoContainerArrBig[videoCountBig - 1].style.transform = 'scale(0)';
        videoContainerArrBig[videoCountBig - 1].style.opacity = '0';
      }
    }
    if (!videoContainerArrBig[videoCountBig + 2]) {
      lazyLoad(buildDom, addNewVideoBlocks);
    }

    if (listCountBig > 3) {
      for (let i = 0; i < listContainerArrBig.length; i += 1) {
        listContainerArrBig[i].innerHTML = `${videoCountBig + i + 1}`;
        listContainerArrBig[i].style.backgroundColor = 'whitesmoke';
      }
      listContainerArrBig[0].style.backgroundColor = 'gold';
      listCountBig = 0;
    } else if (listCountBig !== 0) {
      listContainerArrBig[listCountBig - 1].style.backgroundColor = 'whitesmoke';
      listContainerArrBig[listCountBig].style.backgroundColor = 'gold';
    }

    if (listCountMid !== 0 && listCountMid > 3) {
      for (let i = 0; i < listContainerArrMid.length; i += 1) {
        listContainerArrMid[i].innerHTML = `${videoCountMid + i + 1}`;
        listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
      }

      listContainerArrMid[0].style.backgroundColor = 'gold';
      listCountMid = 0;
    } else if (listCountMid !== 0 && listCountMid < 4) {
      if (mainContainerArr[0].style.display === 'flex') listContainerArrMid[listCountMid - 2].style.backgroundColor = 'whitesmoke';
      else listContainerArrMid[listCountMid - 1].style.backgroundColor = 'whitesmoke';
      listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
    }

    if (listCountSmall > 3) {
      for (let i = 0; i < listContainerArrSmall.length; i += 1) {
        listContainerArrSmall[i].innerHTML = `${videoCountSmall + i + 1}`;
        listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
      }

      listContainerArrSmall[0].style.backgroundColor = 'gold';
      listCountSmall = 0;
    } else if (listCountSmall !== 0 && listCountSmall < 4) {
      if (mainContainerArr[1].style.display === 'flex') listContainerArrSmall[listCountSmall - 2].style.backgroundColor = 'whitesmoke';
      else {
        listContainerArrSmall[listCountSmall - 1].style.backgroundColor = 'whitesmoke';
      }

      listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';
    }
  }
};
