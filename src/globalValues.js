module.exports = () => {
  window.pageToken = 0;
  window.newX = 0;
  window.start = null;
  window.videoCountBig = 0;
  window.videoCountMid = 0;
  window.videoCountSmall = 0;
  window.listCountBig = 0;
  window.listCountMid = 0;
  window.listCountSmall = 0;
  window.allVideosArr = [];
  window.statVideosArr = [];
  window.allVideosStr = '';

  window.searchItems = document.getElementById('search-input').value;
  window.videoContainerArrBig = document.getElementsByClassName('video-container-big');
  window.videoContainerArrMid = document.getElementsByClassName('video-container-mid');
  window.videoContainerArrSmall = document.getElementsByClassName('video-container-small');
  window.videoElementsArrBig = document.getElementsByClassName('video-element-big');
  window.videoElementsArrMid = document.getElementsByClassName('video-element-mid');
  window.videoElementsArrSmall = document.getElementsByClassName('video-element-small');
  window.mainContainerArr = document.getElementsByClassName('main-container');
  window.listContainerArrBig = document.getElementsByClassName('videos-list-li-big');
  window.listContainerArrMid = document.getElementsByClassName('videos-list-li-mid');
  window.listContainerArrSmall = document.getElementsByClassName('videos-list-li-small');
  window.listContainerArr = document.getElementsByClassName('videos-list');
};
