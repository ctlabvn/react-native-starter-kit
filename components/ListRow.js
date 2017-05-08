import React, { PropTypes, Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import Screens from '../constants/Screens';

class ListRow extends Component {

    toggleImage = () => {
        const { item } = this.props;
        this.props.navigator.showModal({
            screen: Screens.TAB_GALLERY_DETAILS.screen,
            animationType: 'slide-up',
            passProps: { item },
            navigatorStyle: {
                navBarHidden: true,
                statusBarHidden: true,
            }
        });
    }

    render() {
        const { item, style } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.toggleImage.bind(this, item)}
                >
                    <CachedImage
                        source={{ uri: item.images.preview_gif.url }}
                        style={[styles.preview, style]}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

ListRow.propTypes = {
    item: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
    style: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]),
};

const styles = {
    container: {
        padding: 20,
    },
    rowContainer: {
        backgroundColor: 'grey'
    },
    preview: {
        width: undefined,
        height: 200,
        resizeMode: 'cover',
        borderWidth: 0.5,
    }
};
export { ListRow };
