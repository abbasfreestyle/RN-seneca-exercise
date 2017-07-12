import {combineReducers} from 'redux';
import CAEreducer from './CAEreducer';
import progress from './progressReducer';
import nav from './navReducer';
import timeCompleted from './timerReducer';
import saved from './saveReducer';

export default combineReducers({
  causeAndEffect: CAEreducer,
  nav,
  progress,
  timeCompleted,
  saved,
});
