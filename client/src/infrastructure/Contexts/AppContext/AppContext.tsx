import React from 'react';
import appToolsReducer from './reducers/appTools';
import { appDispatch, iMainState } from './types';

const initialState: iMainState = {
  appTools: {
    isSearchBoxVisible: false,
  },
};

export const AppContext = React.createContext<{
  initialState: iMainState;
  dispatch: React.Dispatch<appDispatch>;
}>({
  initialState,
  dispatch: () => null,
});

const defaultReducer = ({ appTools }: iMainState, action: appDispatch) => ({
  appTools: appToolsReducer(appTools, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(defaultReducer, initialState);
  const store = React.useMemo(() => ({ initialState: state, dispatch }), [state]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppProvider;
