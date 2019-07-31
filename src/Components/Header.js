import React from 'react'
import {
    Text,
    View
} from 'react-native'

const Header = (props) => {
    const {textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 5,
        position: 'relative',
        paddingTop: 15,
    },
    textStyle: {
        fontSize: 20,
    }
}
export default Header