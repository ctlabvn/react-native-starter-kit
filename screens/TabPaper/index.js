import React from 'react';
import { View, Text } from 'react-native';
import navigatorStyle from '../../constants/NavigatorStyle';
import styles from './styles';

class TabPaper extends React.Component {
    static navigatorStyle = navigatorStyle;

    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = (event) => {
        console.log('onNavigatorEvent', event.type);
        if (event.type === 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id === 'sideMenu') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>TabPaper</Text>
            </View>
        );
    }
}

export default TabPaper;
