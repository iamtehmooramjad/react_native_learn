import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType={"fade"}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/target.png')}/>
                <TextInput style={styles.textInput} placeholder={'Your Goal!'} onChangeText={goalInputHandler}
                           value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title={'Add Goal'} onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Cancel'} onPress={props.onCancelGoal}/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#e5e5e5'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        margin:16,
        flexDirection: "row"
    },
    button: {
        width:100,
        marginHorizontal: 8
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
});