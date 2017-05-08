import { NETWORK_CONNECTION_CHANGE } from '../constants/ActionTypes';

const INIT = {
    isOnline: null,
    isOffline: null
};

export default (state = INIT, action) => {
    switch (action.type) {
        case NETWORK_CONNECTION_CHANGE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
