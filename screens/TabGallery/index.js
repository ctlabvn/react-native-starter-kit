import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import navigatorStyle from '../../constants/NavigatorStyle';
import { ListRow } from '../../components';
import { fetchPhotos } from '../../actions';
import styles from './styles';

class TabGallery extends React.Component {
    static navigatorStyle = navigatorStyle

    constructor(props) {
        super(props);

        // this.props.store.fetchPhotos();
        this.props.dispatch(fetchPhotos());
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id === 'sideMenu') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true
                });
            }
        }
    }

    renderRow = (item) => {
        return (
            <ListRow
                item={item}
                visible={false}
                onPress={() => console.log(item)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.photos}
                    renderItem={({ item }) => <ListRow item={item} navigator={this.props.navigator} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        );
    }
}

export default connect(state => ({
    loading: state.photos.loading,
    photos: state.photos.data,
}))(TabGallery);
