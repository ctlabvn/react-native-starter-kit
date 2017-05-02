import { NETWORK_CONNECTION_CHANGE } from '../constants/ActionTypes';

const INIT = {
    isConnected: false
};

export default (state = INIT, action) => {
    switch (action.type) {
        case NETWORK_CONNECTION_CHANGE:
            return { ...state, isConnected: action.status };
        default:
            return state;
    }
}