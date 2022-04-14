import * as actionTypes from '../actionTypes';
import { appDispatch, iAppTools } from '../types';

const appToolsReducer = (state: iAppTools, action: appDispatch) => {
  switch (action.type) {
    case actionTypes.toggleSearchBox:
      return {
        ...state,
        isSearchBoxVisible: !state.isSearchBoxVisible
      };

    default:
      return state;
  }
};

export default appToolsReducer;