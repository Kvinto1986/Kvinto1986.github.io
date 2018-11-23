/* eslint-disable no-undef */

module.exports = (buildDom, addNewVideoBlocks) => {
  const searchItems = document.getElementById('search-input').value;
  fetch(`https://content.googleapis.com/youtube/v3/search?pageToken=${pageToken}&maxResults=30&part=snippet&q=${searchItems}&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE`)
    .then(resp => resp.json())
    .then((resp) => {
      pageToken = resp.nextPageToken;
      allVideosArr = resp.items;
      allVideosStr = allVideosArr.map(num => num.id.videoId);
      fetch(`https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=${allVideosStr}&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE`)
        .then(idresp => idresp.json())
        .then((idresp) => {
          statVideosArr = idresp.items;
        });
    })
    .then(() => {
      buildDom(allVideosArr);
      addNewVideoBlocks();
    });
};
