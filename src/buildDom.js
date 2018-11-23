/* eslint-disable no-undef */

module.exports = (allVideosArr) => {
  const bigScreen = 4;
  const midScreen = 2;
  const smallScreen = 1;

  for (let i = 0; i < 16; i += 1) {
    if (i % bigScreen === 0) {
      const videoContainerBig = document.createElement('div');
      videoContainerBig.className = 'video-container-big';
      mainContainerBig.appendChild(videoContainerBig);
    }
    if (i % midScreen === 0) {
      const videoContainerMid = document.createElement('div');
      videoContainerMid.className = 'video-container-mid';
      mainContainerMid.appendChild(videoContainerMid);
    }
    if (i % smallScreen === 0) {
      const videoContainerSmall = document.createElement('div');
      videoContainerSmall.className = 'video-container-small';
      mainContainerSmall.appendChild(videoContainerSmall);
    }

    const addElement = `${'<img class="video-container-img" '
            + 'src="'}${allVideosArr[i].snippet.thumbnails.high.url}">`
            + `<a class="video-container-link" href="https://www.youtube.com/watch?v=${allVideosArr[i].id.videoId}" `
            + `target="_blank" >${allVideosArr[i].snippet.title}</a>`
            + '<ul class="video-container-ul">'
            + '<li class="video-container-ul-li">'
            + `<i class="fas fa-user fa-2x" style="color: dodgerblue"></i>${allVideosArr[i].snippet.channelTitle}`
            + '</li>'
            + ''
            + '<li class="video-container-ul-li">'
            + `<i class="fas fa-calendar-alt fa-2x" style="color: green"></i>${allVideosArr[i].snippet.publishedAt.substr(0, 10)}`
            + '</li>'
            + '<li class="video-container-ul-li">'
            + `<i class="fas fa-eye fa-2x" style="color: firebrick"></i>${statVideosArr[i].statistics.viewCount}`
            + '</li>'
            + '</ul>'
            + `<p class="video-container-text">${allVideosArr[i].snippet.description}</p>`;

    const videoElementBig = document.createElement('div');
    videoElementBig.className = 'video-element-big';
    videoElementBig.innerHTML = addElement;
    videoElementsBig.appendChild(videoElementBig);

    const videoElementMid = document.createElement('div');
    videoElementMid.className = 'video-element-mid';
    videoElementMid.innerHTML = addElement;
    videoElementsMid.appendChild(videoElementMid);

    const videoElementSmall = document.createElement('div');
    videoElementSmall.className = 'video-element-small';
    videoElementSmall.innerHTML = addElement;
    videoElementsSmall.appendChild(videoElementSmall);
  }
};
