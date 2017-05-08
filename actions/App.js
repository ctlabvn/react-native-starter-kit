import { NETWORK_CONNECTION_CHANGE } from '../constants/ActionTypes';

export const setConnectivity = (network) => {
    const status = network.toUpperCase();
    return {
        type: NETWORK_CONNECTION_CHANGE,
        payload: {
            isOnline: status !== 'NONE',
            isOffline: status === 'NONE',
        }
    };
};
