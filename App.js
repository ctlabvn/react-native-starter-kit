import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './store';
import { registerScreens } from './screens';
import tabsStyle from './constants/TabsStyle';
import appStyle from './constants/AppStyle';
import Screens from './constants/Screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';

export default registerScreens(configureStore(() => iconsLoaded.then(() =>
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: Screens.TAB_HOME.label,
                screen: Screens.TAB_HOME.screen,
                title: Screens.TAB_HOME.title,
                icon: iconsMap['ios-home'],
                selectedIcon: iconsMap['ios-home'], // iOS only
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: iconsMap['ios-menu'],
                            id: 'sideMenu'
                        }
                    ]
                }
            },
            {
                label: Screens.TAB_PAPER.label,
                screen: Screens.TAB_PAPER.screen,
                title: Screens.TAB_PAPER.title,
                icon: iconsMap['ios-paper'],
                selectedIcon: iconsMap['ios-paper'], // iOS only
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: iconsMap['ios-menu'],
                            id: 'sideMenu'
                        }
                    ]
                }
            },
            {
                label: Screens.TAB_GALLERY.label,
                screen: Screens.TAB_GALLERY.screen,
                title: Screens.TAB_GALLERY.title,
                icon: iconsMap['ios-images'],
                selectedIcon: iconsMap['ios-images'], // iOS only
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: iconsMap['ios-menu'],
                            id: 'sideMenu'
                        }
                    ]
                }
            },
        ],
        drawer: {
            left: {
                screen: Screens.DRAWER_PROFILE.screen,
            },
            style: {
                leftDrawerWidth: '85%',
            }
        },
        tabsStyle,
        appStyle,
        animationType: 'faded',
    })
).catch(error => console.error(error))), Provider);
