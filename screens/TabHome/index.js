import React from 'react';
import { View, Text } from 'react-native';
import { CachedImage } from "react-native-img-cache";
import styles from './styles';

class TabHome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TabHome</Text>
                <CachedImage
                    source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }}
                    style={styles.image}
                />
            </View>
        );
    }
}

export default TabHome;
