import * as actionTypes from '../actionTypes';

export interface iMainState {
    appTools: iAppTools;
}

export interface iAppTools {
    isSearchBoxVisible: boolean;
}

export interface toggleSearchBox {
    type: typeof actionTypes.toggleSearchBox;
}

export type appDispatch = toggleSearchBox;