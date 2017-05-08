import React, { PropTypes } from 'react';
import { View, TouchableOpacity, PanResponder } from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import navigatorStyle from '../../constants/NavigatorStyle';

class TabGalleryDetails extends React.Component {
    static navigatorStyle = navigatorStyle

    constructor(props) {
        super(props);

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => true,
        });
    }

    onResponderMove = (event, gestureState) => {
        console.log(event);
        console.log(gestureState);
    }

    render() {
        const { item, navigator } = this.props;
        return (
            <View style={styles.container} >
                <TouchableOpacity
                    onPress={() => navigator.dismissModal({ animationType: 'slide-down' })}
                    style={{
                        position: 'absolute',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        top: 0,
                        right: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingRight: 20,
                        paddingLeft: 20,
                        zIndex: 2,
                        backgroundColor: 'transparent'
                    }}
                >
                    <Ionicons name='ios-close' size={40} color='#fff' />
                </TouchableOpacity>
                <CachedImage
                    source={{ uri: item.images.downsized_medium.url }}
                    style={styles.image}
                    onResponderMove={this.onResponderMove.bind(this)}
                />
            </View>
        );
    }
}

TabGalleryDetails.propTypes = {
    item: PropTypes.object.isRequired
};

export default TabGalleryDetails;
