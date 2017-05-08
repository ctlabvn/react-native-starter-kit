import { combineReducers } from 'redux';
import App from './App';
import Photos from './Photos';

export default combineReducers({
    app: App,
    photos: Photos,
});
