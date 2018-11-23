/* eslint-disable no-undef */

module.exports = (buildDom, addVideoBlocks, addNewVideoBlocks, checkRes) => {
  window.searchItems = document.getElementById('search-input').value;
  fetch(`https://content.googleapis.com/youtube/v3/search?maxResults=30&part=snippet&q=${searchItems}&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE`)
    .then(resp => resp.json())
    .then((resp) => {
      pageToken = resp.nextPageToken;
      allVideosArr = resp.items;

      allVideosStr = allVideosArr.map(num => num.id.videoId);
      fetch(`https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=${allVideosStr}&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE`)
        .then(idresp => idresp.json())
        .then((idresp) => {
          statVideosArr = idresp.items;
          if (statVideosArr.length < 17) {
            mainContainerBig.style.display = 'none';
            mainContainerMid.style.display = 'none';
            mainContainerSmall.style.display = 'none';
            errorContainer.style.display = 'flex';
          } else {
            buildDom(allVideosArr);
            for (let i = 0; i < 4; i += 1) {
              const videosListLiBig = document.createElement('li');
              videosListLiBig.className = 'videos-list-li-big';
              if (i === 0) videosListLiBig.style.backgroundColor = 'gold';
              videosListBig.appendChild(videosListLiBig);
              const videosListLiMid = document.createElement('li');
              videosListLiMid.className = 'videos-list-li-mid';
              if (i === 0) videosListLiMid.style.backgroundColor = 'gold';
              videosListMid.appendChild(videosListLiMid);
              const videosListLiSmall = document.createElement('li');
              videosListLiSmall.className = 'videos-list-li-small';
              if (i === 0) videosListLiSmall.style.backgroundColor = 'gold';
              videosListSmall.appendChild(videosListLiSmall);
            }

            errorContainer.style.display = 'none';
            addNewVideoBlocks();
            checkRes();
            addVideoBlocks();
            videoContainerArrBig[0].style.opacity = '1';
            videoContainerArrBig[0].style.transform = 'scale(1)';
            videoContainerArrMid[0].style.opacity = '1';
            videoContainerArrMid[0].style.transform = 'scale(1)';
            videoContainerArrSmall[0].style.opacity = '1';
            videoContainerArrSmall[0].style.transform = 'scale(1)';
          }
        });
    });
};
