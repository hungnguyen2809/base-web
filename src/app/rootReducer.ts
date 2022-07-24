import { combineReducers } from '@reduxjs/toolkit';
import appConfigReducer from 'redux/appConfig/reducer';

const createRootReducer = () => {
  return combineReducers({
    appConfig: appConfigReducer,
  });
};

export default createRootReducer;
