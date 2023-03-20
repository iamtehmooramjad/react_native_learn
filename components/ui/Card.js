import React from 'react';

import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
};

export default Card;

import {StyleSheet} from 'react-native';
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    }
});