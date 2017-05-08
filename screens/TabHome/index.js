import React from 'react';
import { View, Text, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { CachedImage } from 'react-native-img-cache';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigatorStyle from '../../constants/NavigatorStyle';
import ButtonStyle from '../../constants/ButtonStyle';
import { Button } from '../../components';
import { setConnectivity } from '../../actions';
import styles from './styles';

class TabHome extends React.Component {
    static navigatorStyle = navigatorStyle;

    constructor(props) {
        super(props);
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentWillMount() {
        NetInfo.addEventListener('change', this.onConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.removeEventListener('change', this.onConnectivityChange);
    }

    onConnectivityChange = (reach) => {
        this.props.dispatch(setConnectivity(reach));
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
                <Text>TabHome</Text>
                <CachedImage
                    source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }}
                    style={styles.image}
                />
                <Icon.Button
                    name='facebook'
                    onPress={() => this.props.navigator.toggleDrawer({
                        side: 'left',
                        animated: true
                    })}
                    style={ButtonStyle.success}
                >
                    Open Drawer
                </Icon.Button>
                <Button
                    onPress={() => this.props.navigator.switchToTab({ tabIndex: 1 })}
                    style={ButtonStyle.danger}
                >
                    <Text>Goto tab two</Text>
                </Button>
                <Button
                    onPress={() => this.props.navigator.switchToTab({ tabIndex: 2 })}
                    style={ButtonStyle.warning}
                >
                    <Text>Goto tab three</Text>
                </Button>
            </View>
        );
    }
}

export default connect(state => ({ isOnline: state.app.isOnline }))(TabHome);
