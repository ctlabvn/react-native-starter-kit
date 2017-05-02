import React, { Component } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './store';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/Icons';
import navigatorStyle from './constants/NavigatorStyle';
registerScreens(configureStore(() => console.log('configureStore completed')), Provider);

class App extends Component {
    constructor(props) {
        super(props);
        //Grant Access Permission for Android 6.0+
        this.requestCameraPermission();
        iconsLoaded.then(() => this.startApp()).catch(error => console.error(error));
    }

    async requestCameraPermission() {
        try {
            if (Platform.OS === 'ios') {
                return true;
            }
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'reactNativeBoilerplate App READ_EXTERNAL_STORAGE Permission',
                    'message': 'reactNativeBoilerplate App needs access to your READ_EXTERNAL_STORAGE ' +
                    'so we can enhance app performance'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You denied us to help app run faster');
            } else {
                console.log("READ_EXTERNAL_STORAGE permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    startApp() {
        console.log('let start app');
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'example.TabHome',
                    title: 'Home screen',
                    icon: iconsMap['ios-home'],
                    selectedIcon: iconsMap['ios-home'], // iOS only
                    navigatorStyle,
                },
                {
                    label: 'Search',
                    screen: 'example.TabSearch',
                    title: 'Search screen',
                    icon: iconsMap['ios-search'],
                    selectedIcon: iconsMap['ios-search'], // iOS only
                    navigatorStyle,
                },
                {
                    label: 'Sell',
                    screen: 'example.TabSell',
                    title: 'Sell screen',
                    icon: iconsMap['ios-camera'],
                    selectedIcon: iconsMap['ios-camera'], // iOS only
                    navigatorStyle,
                },
                {
                    label: 'Cart',
                    screen: 'example.TabCart',
                    title: 'Cart screen',
                    icon: iconsMap['ios-cart'],
                    selectedIcon: iconsMap['ios-cart'], // iOS only
                    navigatorStyle,
                },
                {
                    label: 'Me',
                    screen: 'example.TabProfile',
                    title: 'Profile screen',
                    icon: iconsMap['ios-contact'],
                    selectedIcon: iconsMap['ios-contact'], // iOS only
                    navigatorStyle,
                },
            ],
            tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
                tabBarButtonColor: 'grey', // optional, change the color of the tab icons and text (also unselected)
                tabBarSelectedButtonColor: '#444', // optional, change the color of the selected tab icon and text (only selected)
                tabBarBackgroundColor: '#fafafa' // optional, change the background color of the tab bar
            },
            appStyle: {
                tabBarButtonColor: 'grey', // optional, change the color of the tab icons and text (also unselected)
                tabBarSelectedButtonColor: '#444', // optional, change the color of the selected tab icon and text (only selected)
                tabBarBackgroundColor: '#fafafa', // optional, change the background color of the tab bar
                orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
                forceTitlesDisplay: true, // Only for android
            },
        });
    }
}

const app = new App();
export default app;
