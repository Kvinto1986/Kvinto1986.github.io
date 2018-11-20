/* eslint-disable no-undef,no-shadow,no-use-before-define */
const body = document.body;

const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';
body.appendChild(searchContainer);

const searchInput = document.createElement('input');
searchInput.id = 'search-input';
searchInput.placeholder='Please enter your query '
searchInput.type = 'text';
searchContainer.appendChild(searchInput);

const searchButton = document.createElement('button');
searchButton.className = 'search-button';
searchButton.type = 'search-button';
searchButton.innerHTML = "<i class='fas fa-search fa-2x'></i>";
searchContainer.appendChild(searchButton);

const mainContainerBig = document.createElement('div');
mainContainerBig.className = 'main-container';
body.appendChild(mainContainerBig);

const mainContainerMid = document.createElement('div');
mainContainerMid.className = 'main-container';
body.appendChild(mainContainerMid);

const mainContainerSmall = document.createElement('div');
mainContainerSmall.className = 'main-container';
body.appendChild(mainContainerSmall);

const navigationConatiner = document.createElement('div');
navigationConatiner.className = 'navigation-conatiner';
body.appendChild(navigationConatiner);

const videosListBig = document.createElement('ul');
videosListBig.className = 'videos-list';
navigationConatiner.appendChild(videosListBig);

const videosListMid = document.createElement('ul');
videosListMid.className = 'videos-list';
navigationConatiner.appendChild(videosListMid);

const videosListSmall = document.createElement('ul');
videosListSmall.className = 'videos-list';
navigationConatiner.appendChild(videosListSmall);


const videoElementsBig = document.createElement('div');
videoElementsBig.className = 'video-elements';
body.appendChild(videoElementsBig);

const videoElementsMid = document.createElement('div');
videoElementsMid.className = 'video-elements';
body.appendChild(videoElementsMid);

const videoElementsSmall = document.createElement('div');
videoElementsSmall.className = 'video-elements';
body.appendChild(videoElementsSmall);

if (document.body.clientWidth > 1200) {
    mainContainerBig.style.display = 'flex';

}
if (document.body.clientWidth < 1200 && document.body.clientWidth > 550) {
    mainContainerMid.style.display = 'flex';

}
if (document.body.clientWidth < 550) {

    mainContainerSmall.style.display = 'flex';
}
let tmp = 0;
let count = 0;
let videoCountBig = 0;
let videoCountMid = 0;
let videoCountSmall = 0;
let listCountBig = 0;
let listCountMid = 0;
let listCountSmall = 0;
let allVideosArr = [];
let statVideosArr = [];
let allVideosStr = '';


function reset() {
    tmp = 0;
    count = 0;
    listCountBig = 0;
    listCountMid = 0;
    listCountSmall = 0;
    videoCountBig = 0;
    videoCountMid = 0;
    videoCountSmall = 0;
    videosListBig.innerHTML = '';
    videosListMid.innerHTML = '';
    videosListSmall.innerHTML = '';
    mainContainerBig.innerHTML = '';
    mainContainerMid.innerHTML = '';
    mainContainerSmall.innerHTML = '';
    videoContainerArrBig.innerHTML = '';
    videoContainerArrMid.innerHTML = '';
    videoContainerArrSmall.innerHTML = '';
}

function searchByWord() {
    reset();
    makeRequest();

}

function build() {
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


        const videoElementBig = document.createElement('div');
        videoElementBig.className = 'video-element-big';
        videoElementBig.innerHTML = '<img class="video-container-img" ' +
            'src="' + allVideosArr[i].snippet.thumbnails.high.url + '">' + '<a class="video-container-link" href="https://www.youtube.com/watch?v=' + allVideosArr[i].id.videoId + '" ' +
            'target="_blank" >' + allVideosArr[i].snippet.title + '</a>' + '<ul class="video-container-ul">' + '<li class="video-container-ul-li">' + `<i class="fas fa-user fa-2x" style="color: dodgerblue"></i>${allVideosArr[i].snippet.channelTitle}` + '</li>' + '' +
            '<li class="video-container-ul-li">' + `<i class="fas fa-calendar-alt fa-2x" style="color: green"></i>${allVideosArr[i].snippet.publishedAt.substr(0, 10)}`
            + '</li>' + '<li class="video-container-ul-li">' + `<i class="fas fa-eye fa-2x" style="color: firebrick"></i>${statVideosArr[i].statistics.viewCount}` + '</li>' + '</ul>' + '<p class="video-container-text">' + allVideosArr[i].snippet.description + '</p>';
        videoElementsBig.appendChild(videoElementBig);

        const videoElementMid = document.createElement('div');
        videoElementMid.className = 'video-element-mid';
        videoElementMid.innerHTML = '<img class="video-container-img" ' +
            'src="' + allVideosArr[i].snippet.thumbnails.high.url + '">' + '<a class="video-container-link" href="https://www.youtube.com/watch?v=' + allVideosArr[i].id.videoId + '" ' +
            'target="_blank" >' + allVideosArr[i].snippet.title + '</a>' + '<ul class="video-container-ul">' + '<li class="video-container-ul-li">' + `<i class="fas fa-user fa-2x" style="color: dodgerblue"></i>${allVideosArr[i].snippet.channelTitle}` + '</li>' + '' +
            '<li class="video-container-ul-li">' + `<i class="fas fa-calendar-alt fa-2x" style="color: green"></i>${allVideosArr[i].snippet.publishedAt.substr(0, 10)}`
            + '</li>' + '<li class="video-container-ul-li">' + `<i class="fas fa-eye fa-2x" style="color: firebrick"></i>${statVideosArr[i].statistics.viewCount}` + '</li>' + '</ul>' + '<p class="video-container-text">' + allVideosArr[i].snippet.description + '</p>';
        videoElementsMid.appendChild(videoElementMid);

        const videoElementSmall = document.createElement('div');
        videoElementSmall.className = 'video-element-small';
        videoElementSmall.innerHTML = '<img class="video-container-img" ' +
            'src="' + allVideosArr[i].snippet.thumbnails.high.url + '">' + '<a class="video-container-link" href="https://www.youtube.com/watch?v=' + allVideosArr[i].id.videoId + '" ' +
            'target="_blank" >' + allVideosArr[i].snippet.title + '</a>' + '<ul class="video-container-ul">' + '<li class="video-container-ul-li">' + `<i class="fas fa-user fa-2x" style="color: dodgerblue"></i>${allVideosArr[i].snippet.channelTitle}` + '</li>' + '' +
            '<li class="video-container-ul-li">' + `<i class="fas fa-calendar-alt fa-2x" style="color: green"></i>${allVideosArr[i].snippet.publishedAt.substr(0, 10)}`
            + '</li>' + '<li class="video-container-ul-li">' + `<i class="fas fa-eye fa-2x" style="color: firebrick"></i>${statVideosArr[i].statistics.viewCount}` + '</li>' + '</ul>' + '<p class="video-container-text">' + allVideosArr[i].snippet.description + '</p>';
        videoElementsSmall.appendChild(videoElementSmall);

    }

}

function LazyLoad() {
    console.log(tmp + '1111')
    let searchItems = document.getElementById('search-input').value;
    fetch('https://content.googleapis.com/youtube/v3/search?pageToken=' + tmp + '&maxResults=30&part=snippet&q=' + searchItems + '&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE')
        .then(resp => resp.json())
        .then((resp) => {
            tmp = resp.nextPageToken;
            allVideosArr = resp.items;
            allVideosStr = allVideosArr.map(function (num) {
                return num.id.videoId
            });
            fetch('https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=' + allVideosStr + '&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE')
                .then(idresp => idresp.json())
                .then((idresp) => {
                        statVideosArr = idresp.items;

                    }
                );

        })
        .then(() => {
            build();
            addNewVideoBlocks();
        })
};

function makeRequest() {
    let searchItems = document.getElementById('search-input').value;
    fetch('https://content.googleapis.com/youtube/v3/search?maxResults=30&part=snippet&q=' + searchItems + '&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE')
        .then(resp => resp.json())
        .then((resp) => {
            tmp = resp.nextPageToken;
            allVideosArr = resp.items;

            allVideosStr = allVideosArr.map(function (num) {
                return num.id.videoId
            });
            fetch('https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=' + allVideosStr + '&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE')
                .then(idresp => idresp.json())
                .then((idresp) => {
                    statVideosArr = idresp.items;


                    build();
                    for (let i = 0; i < 4; i += 1) {
                        const videosListLi = document.createElement('li');
                        videosListLi.className = 'videos-list-li-big';
                        if (i === 0) videosListLi.style.backgroundColor = 'gold';
                        videosListBig.appendChild(videosListLi);
                    }
                    for (let i = 0; i < 4; i += 1) {
                        const videosListLi = document.createElement('li');
                        videosListLi.className = 'videos-list-li-mid';
                        if (i === 0) videosListLi.style.backgroundColor = 'gold';
                        videosListMid.appendChild(videosListLi);
                    }
                    for (let i = 0; i < 4; i += 1) {
                        const videosListLi = document.createElement('li');
                        videosListLi.className = 'videos-list-li-small';
                        if (i === 0) videosListLi.style.backgroundColor = 'gold';
                        videosListSmall.appendChild(videosListLi);
                    }

                    addVideoBlocks();

                    const videoContainerArrBig = document.getElementsByClassName('video-container-big');
                    const videoContainerArrMid = document.getElementsByClassName('video-container-mid');
                    const videoContainerArrSmall = document.getElementsByClassName('video-container-small');

                    videoContainerArrBig[0].style.opacity = '1';
                    videoContainerArrBig[0].style.transform= 'scale(1)';
                    videoContainerArrMid[0].style.opacity = '1';
                    videoContainerArrMid[0].style.transform= 'scale(1)';
                    videoContainerArrSmall[0].style.opacity = '1';
                    videoContainerArrSmall[0].style.transform= 'scale(1)';
                });
        });
}

function addNewVideoBlocks() {
 let tmp=0;
    for (let i =0; i < videoContainerArrBig.length; i += 1) {
        for (let j = tmp; j < tmp + 4; j++) {
            videoContainerArrBig[i].appendChild(videoElementsArrBig[j]);
        }
        tmp += 4;
    }
    tmp = 0;
    for (let i = 0; i < videoContainerArrMid.length; i += 1) {
        for (let j = tmp; j < tmp + 2; j++) {
            videoContainerArrMid[i].appendChild(videoElementsArrMid[j]);
        }
        tmp += 2;
    }
    tmp = 0;
    for (let i = 0; i < videoContainerArrSmall.length; i += 1) {
        for (let j = tmp; j < tmp + 1; j++) {
            videoContainerArrSmall[i].appendChild(videoElementsArrSmall[j]);
        }
        tmp += 1;
    }

}

function addVideoBlocks() {
    const listContainerArrBig = document.getElementsByClassName('videos-list-li-big');
    const listContainerArrMid = document.getElementsByClassName('videos-list-li-mid');
    const listContainerArrSmall = document.getElementsByClassName('videos-list-li-small');

    let tmp = 0;

    for (let i = 0; i < videoContainerArrBig.length; i += 1) {
        for (let j = tmp; j < tmp + 4; j++) {
            videoContainerArrBig[i].appendChild(videoElementsArrBig[j]);
        }
        tmp += 4;
    }
    tmp = 0;
    for (let i = 0; i < videoContainerArrMid.length; i += 1) {
        for (let j = tmp; j < tmp + 2; j++) {
            videoContainerArrMid[i].appendChild(videoElementsArrMid[j]);
        }
        tmp += 2;
    }
    tmp = 0;
    for (let i = 0; i < videoContainerArrSmall.length; i += 1) {
        for (let j = tmp; j < tmp + 1; j++) {
            videoContainerArrSmall[i].appendChild(videoElementsArrSmall[j]);
        }
        tmp += 1;
    }

    for (let i = 0; i < listContainerArrBig.length; i += 1) {
        listContainerArrBig[i].innerHTML = `${i + 1}`;
        if(i===0){
            listContainerArrBig[i].style.backgroundColor = 'gold';
        }
    }
    for (let i = 0; i < listContainerArrSmall.length; i += 1) {
        listContainerArrSmall[i].innerHTML = `${i + 1}`;
        if(i===0){
            listContainerArrMid[i].style.backgroundColor = 'gold';
        }
    }
    for (let i = 0; i < listContainerArrMid.length; i += 1) {
        listContainerArrMid[i].innerHTML = `${i + 1}`;
        if(i===0){
            listContainerArrSmall[i].style.backgroundColor = 'gold';
        }
    }

    const mainContainerArr = document.getElementsByClassName('main-container');
    const listContainerArr = document.getElementsByClassName('videos-list');
    if (document.body.clientWidth > 1200) {
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
}

const videoContainerArrBig = document.getElementsByClassName('video-container-big');
const videoContainerArrMid = document.getElementsByClassName('video-container-mid');
const videoContainerArrSmall = document.getElementsByClassName('video-container-small');
const videoElementsArrBig = document.getElementsByClassName('video-element-big');
const videoElementsArrMid = document.getElementsByClassName('video-element-mid');
const videoElementsArrSmall = document.getElementsByClassName('video-element-small');
const videoContainerListArr = document.getElementsByClassName('videos-list-li');
const mainContainerArr = document.getElementsByClassName('main-container');
const listContainerArrBig = document.getElementsByClassName('videos-list-li-big');
const listContainerArrMid = document.getElementsByClassName('videos-list-li-mid');
const listContainerArrSmall = document.getElementsByClassName('videos-list-li-small');

function nextList() {

    if (mainContainerArr[0].style.display === 'flex') {
        videoCountBig += 1;
        videoCountMid += 2;
        videoCountSmall += 4;
        videoContainerArrBig[videoCountBig].style.opacity = '1';
        videoContainerArrBig[videoCountBig].style.transform= 'scale(1)';
        videoContainerArrBig[videoCountBig-1].style.transform= 'scale(0)';
        videoContainerArrBig[videoCountBig-1].style.opacity = '0';

                videoContainerArrMid[videoCountMid-2].style.transform= 'scale(0)';
                videoContainerArrMid[videoCountMid-2].style.opacity = '0';

            videoContainerArrMid[videoCountMid].style.opacity = '1';
            videoContainerArrMid[videoCountMid].style.transform= 'scale(1)';


                videoContainerArrSmall[videoCountSmall-4].style.transform= 'scale(0)';
                videoContainerArrSmall[videoCountSmall-4].style.opacity = '0';

            videoContainerArrSmall[videoCountSmall].style.opacity = '1';
            videoContainerArrSmall[videoCountSmall].style.transform= 'scale(1)';


        listCountBig += 1;
        listCountMid += 2;
        listCountSmall += 4;

    }

    if (mainContainerArr[1].style.display === 'flex') {
        videoCountMid += 1;
        videoContainerArrMid[videoCountMid].style.opacity = '1';
        videoContainerArrMid[videoCountMid].style.transform= 'scale(1)';
        videoContainerArrMid[videoCountMid-1].style.transform= 'scale(0)';
        videoContainerArrMid[videoCountMid-1].style.opacity = '0';

        if (videoCountMid !== 0 && videoCountMid % 2 === 0) {
            videoCountBig += 1;
            listCountBig += 1;
            videoContainerArrBig[videoCountBig].style.opacity = '1';
            videoContainerArrBig[videoCountBig].style.transform= 'scale(1)';
            videoContainerArrBig[videoCountBig-1].style.transform= 'scale(0)';
            videoContainerArrBig[videoCountBig-1].style.opacity = '0';
        }
        videoCountSmall += 2;


                videoContainerArrSmall[videoCountSmall-2].style.transform= 'scale(0)';
                videoContainerArrSmall[videoCountSmall-2].style.opacity = '0';

            videoContainerArrSmall[videoCountSmall].style.opacity = '1';
            videoContainerArrSmall[videoCountSmall].style.transform= 'scale(1)';


        listCountMid += 1;
        listCountSmall += 2;


    }
    if (mainContainerArr[2].style.display === 'flex') {
        videoCountSmall += 1;
        videoContainerArrSmall[videoCountSmall].style.opacity = '1';
        videoContainerArrSmall[videoCountSmall].style.transform= 'scale(1)';
        videoContainerArrSmall[videoCountSmall-1].style.transform= 'scale(0)';
        videoContainerArrSmall[videoCountSmall-1].style.opacity = '0';
        listCountSmall += 1;
        if (videoCountSmall !== 0 && videoCountSmall % 2 === 0) {
            videoCountMid += 1;
            listCountMid += 1;
            videoContainerArrMid[videoCountMid].style.opacity = '1';
            videoContainerArrMid[videoCountMid].style.transform= 'scale(1)';
            videoContainerArrMid[videoCountMid-1].style.transform= 'scale(0)';
            videoContainerArrMid[videoCountMid-1].style.opacity = '0';

        }
        if (videoCountSmall !== 0 && videoCountSmall % 4 === 0) {
            videoCountBig += 1;
            listCountBig += 1;
            videoContainerArrBig[videoCountBig].style.opacity = '1';
            videoContainerArrBig[videoCountBig].style.transform= 'scale(1)';
            videoContainerArrBig[videoCountBig-1].style.transform= 'scale(0)';
            videoContainerArrBig[videoCountBig-1].style.opacity = '0';
        }

    }
    if (!videoContainerArrBig[videoCountBig + 2]) {
        LazyLoad();
    }

    if (listCountBig >3) {
        for (let i = 0; i < listContainerArrBig.length; i += 1) {
            listContainerArrBig[i].innerHTML = `${videoCountBig + i + 1}`;
            listContainerArrBig[i].style.backgroundColor = 'whitesmoke';
        }
        listContainerArrBig[0].style.backgroundColor = 'gold';
        listCountBig = 0;
    }
    else if (listCountBig !== 0) {
        listContainerArrBig[listCountBig - 1].style.backgroundColor = 'whitesmoke';
        listContainerArrBig[listCountBig].style.backgroundColor = 'gold';

    }

    if (listCountMid!==0&&listCountMid >3) {
        for (let i = 0; i < listContainerArrMid.length; i += 1) {
            listContainerArrMid[i].innerHTML = `${videoCountMid + i + 1}`;
            listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
        }

        listContainerArrMid[0].style.backgroundColor = 'gold';
        listCountMid = 0;

    }
    else  if (listCountMid !== 0&&listCountMid<4){
        if (mainContainerArr[0].style.display === 'flex')
            listContainerArrMid[listCountMid - 2].style.backgroundColor = 'whitesmoke';
        else listContainerArrMid[listCountMid - 1].style.backgroundColor = 'whitesmoke';
            listContainerArrMid[listCountMid].style.backgroundColor = 'gold';


    }

    if (listCountSmall>3) {
        for (let i = 0; i < listContainerArrSmall.length; i += 1) {
            listContainerArrSmall[i].innerHTML = `${videoCountSmall + i + 1}`;
            listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
        }

        listContainerArrSmall[0].style.backgroundColor = 'gold';
        listCountSmall = 0;

    }
    else if (listCountSmall !== 0&&listCountSmall<4) {

        if (mainContainerArr[1].style.display === 'flex')
            listContainerArrSmall[listCountSmall - 2].style.backgroundColor = 'whitesmoke';
        else{
        listContainerArrSmall[listCountSmall - 1].style.backgroundColor = 'whitesmoke';}

        listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';

    }

}

function prewList() {
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
    }
    else if (listCountBig <3&&listCountBig>-1) {
        listContainerArrBig[listCountBig + 1].style.backgroundColor = 'whitesmoke';
        listContainerArrBig[listCountBig].style.backgroundColor = 'gold';

    }

    if (listCountMid < 0) {
        if (mainContainerArr[0].style.display === 'flex'){
        for (let i = 0; i < listContainerArrMid.length; i += 1) {
            listContainerArrMid[i].innerHTML = `${videoCountMid + i - 1}`;
            listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
        }
        }
        else {
            for (let i = 0; i < listContainerArrMid.length; i += 1) {
                listContainerArrMid[i].innerHTML = `${videoCountMid + i - 2}`;
                listContainerArrMid[i].style.backgroundColor = 'whitesmoke';
            }
        }
        listContainerArrMid[4 - Math.abs(listCountMid)].style.backgroundColor = 'gold';
        listCountMid = 4 - Math.abs(listCountMid);
    }

    else  if(listCountMid<3&&listCountMid>-1) {
        if (mainContainerArr[0].style.display === 'flex') {
            listContainerArrMid[listCountMid + 2].style.backgroundColor = 'whitesmoke';
            listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
        }
        if (mainContainerArr[2].style.display === 'flex') {
            if ((videoCountSmall+1) % 2 === 0)
                listContainerArrMid[listCountMid + 1].style.backgroundColor = 'whitesmoke';
            listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
        }
        else {
            listContainerArrMid[listCountMid + 1].style.backgroundColor = 'whitesmoke';
            listContainerArrMid[listCountMid].style.backgroundColor = 'gold';
        }

    }


    if (listCountSmall < 0) {
        if (mainContainerArr[0].style.display === 'flex'){
            for (let i = 0; i < listContainerArrSmall.length; i += 1) {
                listContainerArrSmall[i].innerHTML = `${videoCountSmall + i+1 }`;
                listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
            }
        }
        else if (mainContainerArr[1].style.display === 'flex'){
            for (let i = 0; i < listContainerArrSmall.length; i += 1) {
                listContainerArrSmall[i].innerHTML = `${videoCountSmall + i-1 }`;
                listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
            }
        }
        else if (mainContainerArr[2].style.display === 'flex') {
            for (let i = 0; i < listContainerArrSmall.length; i += 1) {
                listContainerArrSmall[i].innerHTML = `${videoCountSmall + i - 2}`;
                listContainerArrSmall[i].style.backgroundColor = 'whitesmoke';
            }
        }
        listContainerArrSmall[4 - Math.abs(listCountSmall)].style.backgroundColor = 'gold';
        listCountSmall = 4 - Math.abs(listCountSmall);
    }

    else  if(listCountSmall<3&&listCountSmall>-1) {
        if (mainContainerArr[1].style.display === 'flex') {
                listContainerArrSmall[listCountSmall + 2].style.backgroundColor = 'whitesmoke';
            listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';
        }
        else {
            listContainerArrSmall[listCountSmall + 1].style.backgroundColor = 'whitesmoke';
            listContainerArrSmall[listCountSmall].style.backgroundColor = 'gold';
        }

    }

}



    let newX = 0;

mousemovemethod = function (e) {
    newX = e.pageX;
    mainContainerBig.onselectstart = function() {
        return false;
    };
    mainContainerMid.onselectstart = function() {
        return false;
    };
    mainContainerSmall.onselectstart = function() {
        return false;
    };
};
    mousemovemethod1 = function (e) {
        if (e.pageX < newX) {
            prewList();
        } else if (e.pageX > newX) {
            nextList();
        }

        newX = e.pageX;
    };



mainContainerBig.addEventListener('mouseup', mousemovemethod1);
mainContainerBig.addEventListener('mousedown', mousemovemethod);
mainContainerMid.addEventListener('mouseup', mousemovemethod1);
mainContainerMid.addEventListener('mousedown', mousemovemethod);
mainContainerSmall.addEventListener('mouseup', mousemovemethod1);
mainContainerSmall.addEventListener('mousedown', mousemovemethod);
searchButton.onclick = searchByWord;
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            searchByWord();
            break;
        default:
            break;
    }
});

let start = null;
window.addEventListener("touchstart",function(event){
    if(event.touches.length === 1){
        start = event.touches.item(0).clientX;
    }else{
        start = null;
    }
});

    window.addEventListener("touchend",function(event){
        let offset = 20;
        if(start){
            var end = event.changedTouches.item(0).clientX;

            if(end > start + offset){
                prewList();
            }
            if(end < start - offset ){
                nextList();
            }
        }
    });

window.addEventListener('resize', () => {
    const mainContainerArr = document.getElementsByClassName('main-container');
    const listContainerArr = document.getElementsByClassName('videos-list');
    if (document.body.clientWidth > 1201) {

        mainContainerArr[0].style.display = 'flex';
        mainContainerArr[1].style.display = 'none';
        mainContainerArr[2].style.display = 'none';
        listContainerArr[0].style.display = 'flex';
        listContainerArr[1].style.display = 'none';
        listContainerArr[2].style.display = 'none';
    }
    if (document.body.clientWidth < 1201 && document.body.clientWidth > 550) {


        mainContainerArr[0].style.display = 'none';
        mainContainerArr[1].style.display = 'flex';
        mainContainerArr[2].style.display = 'none';
        listContainerArr[0].style.display = 'none';
        listContainerArr[1].style.display = 'flex';
        listContainerArr[2].style.display = 'none';
    }
    if (document.body.clientWidth < 551) {
        mainContainerArr[0].style.display = 'none';
        mainContainerArr[1].style.display = 'none';
        mainContainerArr[2].style.display = 'flex';
        listContainerArr[0].style.display = 'none';
        listContainerArr[1].style.display = 'none';
        listContainerArr[2].style.display = 'flex';
    }


});
