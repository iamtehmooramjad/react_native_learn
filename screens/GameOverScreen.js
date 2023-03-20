import React from 'react';

import {Image, Text, View} from 'react-native';
import Title from "../components/ui/Title";
import {StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/game_over.jpg')}/>
            </View>
            <Text style={styles.summaryText}> Your phone needed <Text
                style={styles.highlightText}>{roundsNumber}</Text> rounds to
                guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open_sans',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 24
    },
    highlightText: {
        fontFamily: 'open_sans_bold',
        color: Colors.primary500
    }
});