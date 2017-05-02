import { Navigation } from 'react-native-navigation';
import TabHome from './TabHome';
import TabSearch from './TabSearch';
import TabSell from './TabSell';
import TabCart from './TabCart';
import TabProfile from './TabProfile';

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent('example.TabHome', () => TabHome, store, Provider);
    Navigation.registerComponent('example.TabSearch', () => TabSearch, store, Provider);
    Navigation.registerComponent('example.TabSell', () => TabSell, store, Provider);
    Navigation.registerComponent('example.TabCart', () => TabCart, store, Provider);
    Navigation.registerComponent('example.TabProfile', () => TabProfile, store, Provider);
};
