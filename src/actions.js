/* eslint-disable no-undef */

module.exports = (makeReqest, reset, buildDom, addVideoBlocks,
  addNewVideoBlocks, checkRes, lazyLoad, swipeForward, swipeBack) => {
  function mouseDown(e) {
    newX = e.pageX;
    mainContainerBig.onselectstart = function () {
      return false;
    };
    mainContainerMid.onselectstart = function () {
      return false;
    };
    mainContainerSmall.onselectstart = function () {
      return false;
    };
  }

  function mouseUp(e) {
    if (e.pageX < newX) {
      swipeBack();
    } else if (e.pageX > newX) {
      swipeForward(lazyLoad, buildDom, addNewVideoBlocks);
    }

    newX = e.pageX;
  }


  mainContainerBig.addEventListener('mouseup', mouseUp);
  mainContainerBig.addEventListener('mousedown', mouseDown);
  mainContainerMid.addEventListener('mouseup', mouseUp);
  mainContainerMid.addEventListener('mousedown', mouseDown);
  mainContainerSmall.addEventListener('mouseup', mouseUp);
  mainContainerSmall.addEventListener('mousedown', mouseDown);

  window.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) {
      start = event.touches.item(0).clientX;
    } else {
      start = null;
    }
  });

  window.addEventListener('touchend', (event) => {
    const offset = 20;
    if (start) {
      const end = event.changedTouches.item(0).clientX;

      if (end > start + offset) {
        swipeBack();
      }
      if (end < start - offset) {
        swipeForward(lazyLoad, buildDom, addNewVideoBlocks);
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Enter':
        makeReqest(buildDom, addVideoBlocks, addNewVideoBlocks, checkRes);
        reset();
        break;
      default:
        break;
    }
  });

  searchButton.addEventListener('click', () => {
    makeReqest(buildDom, addVideoBlocks, addNewVideoBlocks, checkRes);
    reset();
  });


  window.addEventListener('resize', () => {
    if (mainContainerBig.style.display === 'flex' || mainContainerMid.style.display === 'flex' || mainContainerSmall.style.display === 'flex') {
      checkRes();
    }
  });
};
