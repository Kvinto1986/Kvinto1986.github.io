/* eslint-disable no-undef */

module.exports = () => {
  window.body = document.body;

  window.searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  body.appendChild(searchContainer);

  window.searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.placeholder = 'Please enter your query ';
  searchInput.type = 'text';
  searchContainer.appendChild(searchInput);

  window.searchButton = document.createElement('button');
  searchButton.className = 'search-button';
  searchButton.type = 'search-button';
  searchButton.innerHTML = "<i class='fas fa-search fa-2x'></i>";
  searchContainer.appendChild(searchButton);

  window.mainContainerBig = document.createElement('div');
  mainContainerBig.className = 'main-container';
  body.appendChild(mainContainerBig);

  window.mainContainerMid = document.createElement('div');
  mainContainerMid.className = 'main-container';
  body.appendChild(mainContainerMid);

  window.mainContainerSmall = document.createElement('div');
  mainContainerSmall.className = 'main-container';
  body.appendChild(mainContainerSmall);

  window.errorContainer = document.createElement('div');
  errorContainer.className = 'error-container';
  errorContainer.innerHTML = 'Sorry, no results were found for your search, try again...';
  body.appendChild(errorContainer);

  window.navigationConatiner = document.createElement('div');
  navigationConatiner.className = 'navigation-conatiner';
  body.appendChild(navigationConatiner);

  window.videosListBig = document.createElement('ul');
  videosListBig.className = 'videos-list';
  navigationConatiner.appendChild(videosListBig);

  window.videosListMid = document.createElement('ul');
  videosListMid.className = 'videos-list';
  navigationConatiner.appendChild(videosListMid);

  window.videosListSmall = document.createElement('ul');
  videosListSmall.className = 'videos-list';
  navigationConatiner.appendChild(videosListSmall);


  window.videoElementsBig = document.createElement('div');
  videoElementsBig.className = 'video-elements';
  body.appendChild(videoElementsBig);

  window.videoElementsMid = document.createElement('div');
  videoElementsMid.className = 'video-elements';
  body.appendChild(videoElementsMid);

  window.videoElementsSmall = document.createElement('div');
  videoElementsSmall.className = 'video-elements';
  body.appendChild(videoElementsSmall);
};
