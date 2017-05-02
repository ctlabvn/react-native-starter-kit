import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const middlewares = [thunk];
if (__DEV__) {
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default configureStore = (onComplete) => {
    const store = autoRehydrate()(createStoreWithMiddleware)(reducers);

    // https://github.com/rt2zz/redux-persist#api
    persistStore(store, {
        storage: AsyncStorage,
        debounce: 500, //only write data every 500 milliseconds
        blacklist: ['app'], //do not persist these keys
        keyPrefix: 'reactNativeBoilerplate', //localstorage default key
    }, onComplete);

    return store;
};
