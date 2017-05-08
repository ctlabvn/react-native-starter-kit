import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonStyle from '../constants/ButtonStyle';

const Button = ({ children, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[ButtonStyle.button, style]}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    children: React.PropTypes.object.isRequired,
    onPress: React.PropTypes.func.isRequired,
    style: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.object,
        React.PropTypes.array,
    ]),
};

export { Button };
