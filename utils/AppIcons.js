import { PixelRatio, Platform } from 'react-native';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

const navIconSize = (__DEV__ === false && Platform.OS === 'android') ? PixelRatio.getPixelSizeForLayoutSize(40) : 40; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    'ios-home-outline': [30],
    'ios-home': [30],
    'ios-images-outline': [30],
    'ios-images': [30],
    'ios-paper-outline': [30],
    'ios-paper': [30],
    'ios-menu-outline': [30],
    'ios-menu': [30],
    'ios-arrow-round-down': [navIconSize],
    'ios-close': [40]
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve) => {
    new Promise.all(
        Object.keys(icons).map(iconName =>
            // IconName--suffix--other-suffix is just the mapping name in iconsMap
            getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            ))
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

        // Call resolve (and we are done)
        resolve(true);
    });
});

export {
    iconsMap,
    iconsLoaded
};
