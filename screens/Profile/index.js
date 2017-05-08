import React from 'react';
import {
    View,
    Text,
    TextInput,
    Animated,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import { CachedImage } from 'react-native-img-cache';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from '../../components';
import Colors from '../../constants/Colors';
import styles from './styles';

const CONTAINER_TOP_DEFAULT = 0;
const CONTAINER_TOP_SCROLL = -180;
class Profile extends React.Component {
    static navigatorStyle = {
        statusBarColor: 'red'
    }

    constructor(props) {
        super(props);

        this.containerTop = new Animated.Value(CONTAINER_TOP_DEFAULT);
        this.state = {
            phone: '',
            email: '',
            address: '',
        };
    }

    componentWillMount() {
        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.containerTop, {
            duration: event.duration,
            toValue: CONTAINER_TOP_SCROLL
        }).start();
    }

    keyboardWillHide = (event) => {
        Animated.timing(this.containerTop, {
            duration: event.duration,
            toValue: CONTAINER_TOP_DEFAULT
        }).start();
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Animated.View
                    style={[styles.container, { top: this.containerTop }]}
                >
                    <CachedImage
                        source={{ uri: 'https://source.unsplash.com/user/erondu/300x200' }}
                        style={styles.profile}
                    />
                    <CachedImage
                        source={{ uri: 'https://unsplash.it/100/100' }}
                        style={styles.avatar}
                        mutable
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>Anh Tuan Nguyen</Text>
                        <View style={styles.form}>

                            <View style={styles.formGroup}>
                                <Ionicons
                                    name="ios-call"
                                    size={32}
                                    style={styles.icon}
                                />
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Phone</Text>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        value={this.state.phone}
                                        onChangeText={phone => this.setState({ phone })}
                                        style={styles.input}
                                        keyboardType='phone-pad'
                                        returnKeyType='next'
                                        placeholder='0123456789'
                                    />
                                </View>
                            </View>

                            <View style={styles.formGroup}>
                                <Ionicons
                                    name="ios-mail"
                                    size={32}
                                    style={styles.icon}
                                />
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        value={this.state.email}
                                        onChangeText={email => this.setState({ email })}
                                        style={styles.input}
                                        autoCorrect={false}
                                        keyboardType="email-address"
                                        placeholder="email@example.com"
                                        returnKeyType="next"
                                    />
                                </View>
                            </View>

                            <View style={styles.formGroup}>
                                <Ionicons
                                    name="ios-navigate"
                                    size={32}
                                    style={styles.icon}
                                />
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Address</Text>
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        value={this.state.address}
                                        onChangeText={address => this.setState({ address })}
                                        style={styles.textArea}
                                        multiline
                                        numberOfLines={3}
                                        autoCorrect={false}
                                        returnKeyType="done"
                                    />
                                </View>
                            </View>

                            <Button
                                style={{
                                    alignSelf: 'center',
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    backgroundColor: Colors.light,
                                }}
                                onPress={() => console.log('save')}
                            >
                                <Text>Save</Text>
                            </Button>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Profile;
