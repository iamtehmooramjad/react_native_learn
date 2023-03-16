import {Alert, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

const StartGameScreen = () => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{
                text: 'Okay', style: 'destructive', onPress: resetInputHandler
            }]);
            return;
        }
        console.log('Valid' + chosenNumber)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }
    return (<View style={styles.inputContainer}>
        <TextInput style={styles.numberInput}
                   maxLength={2}
                   keyboardType={'number-pad'}
                   autoCapitalize={"none"}
                   autoCorrect={false}
                   value={enteredNumber}
                   onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>);
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    }, numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }, buttonsContainer: {
        flexDirection: "row"
    }, buttonContainer: {
        flex: 1
    }
});