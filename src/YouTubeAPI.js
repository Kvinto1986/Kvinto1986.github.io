import initDOM from './initDOM';
import globalValues from './globalValues';
import checkRes from './checkRes';
import reset from './reset';
import addNewVideoBlocks from './addNewVideoBlocks';
import buildDom from './buildDom';
import addVideoBlocks from './addVideoBlocks';
import makeReqest from './makeReqest';
import actions from './actions';
import lazyLoad from './lazyLoad';
import swipeForward from './swipeForward';
import swipeBack from './swipeBack';

initDOM();
globalValues();
actions(makeReqest, reset, buildDom, addVideoBlocks,
  addNewVideoBlocks, checkRes, lazyLoad, swipeForward, swipeBack);
