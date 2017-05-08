import { Navigation } from 'react-native-navigation';
import Screens from '../constants/Screens';
import TabHome from './TabHome';
import TabPaper from './TabPaper';
import TabGallery from './TabGallery';
import TabGalleryDetails from './TabGalleryDetails';
import Profile from './Profile';

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent(Screens.TAB_HOME.screen, () => TabHome, store, Provider);
    Navigation.registerComponent(Screens.TAB_PAPER.screen, () => TabPaper, store, Provider);
    Navigation.registerComponent(Screens.TAB_GALLERY.screen, () => TabGallery, store, Provider);
    Navigation.registerComponent(Screens.TAB_GALLERY_DETAILS.screen, () => TabGalleryDetails, store, Provider);
    Navigation.registerComponent(Screens.DRAWER_PROFILE.screen, () => Profile, store, Provider);
};
