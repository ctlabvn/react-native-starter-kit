import Colors from './Colors';

export default {
    tabBarHiden: true,
    tabBarButtonColor: 'grey', // optional, change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: Colors.primary, // optional, change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#fafafa', // optional, change the background color of the tab bar
    orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    forceTitlesDisplay: true, // Only for android
};
