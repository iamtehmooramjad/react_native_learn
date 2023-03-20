import React from 'react';

import {Text, StyleSheet} from 'react-native';

const Title = (props) => {
    return (
        <Text style={styles.title}>{props.children}</Text>

    );
};

export default Title;


const styles = StyleSheet.create({

    title: {
        fontFamily: 'open_sans_bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 18,
        borderWidth: 2,
        borderColor: 'white',
        padding: 16
    }
});