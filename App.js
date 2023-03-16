import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals(prevState => [...prevState, {text: enteredGoal, id: Math.random().toString()}])
        endAddGoalHandler()
    };


    const endAddGoalHandler = () => {
        setModalIsVisible(false)
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals(prevState => {
            return prevState.filter((goal) => goal.id !== id)
        })
    }

    const startAddGoalHandler = () => {
        setModalIsVisible(true)
    }

    return (

        <>
            <StatusBar style={'dark'}/>
            <View style={styles.appContainer}>
                <Button title={'Add new goal'} color={'#c44141'} onPress={startAddGoalHandler}/>
                {modalIsVisible &&
                    <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancelGoal={endAddGoalHandler}/>}
                <View style={styles.goalsContainer}>
                    <FlatList data={courseGoals} renderItem={itemData => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}/>
                        )
                    }}
                              keyExtractor={(item, index) => item.id}
                    />

                </View>
            </View>
        </>);
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1
    },

    goalsContainer: {
        flex: 4
    }

});
