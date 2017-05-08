import {
    FETCH_PHOTO_SUCCESSFUL,
    FETCH_PHOTO_FAILED
} from '../constants/ActionTypes';

// const KEY = 'a661c1ca813b4c8e9a83a59515ee2969';

export const fetchPhotos = () => {
    return (dispatch) => {
        fetch('https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: FETCH_PHOTO_SUCCESSFUL,
                    data: result.data
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_FAILED,
                    error
                });
            });
    };
};
