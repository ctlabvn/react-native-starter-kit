import { Dimensions } from 'react-native';

export default {
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        zIndex: 1,
    }
};
