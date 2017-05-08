import {
    FETCH_PHOTO_SUCCESSFUL,
    FETCH_PHOTO_FAILED
} from '../constants/ActionTypes';

const INIT = {
    loading: true,
    data: []
};

export default (state = INIT, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESSFUL:
            return { ...state, loading: false, data: action.data };
        case FETCH_PHOTO_FAILED:
            return { ...state, loading: false };
        default:
            return state;
    }
};
