import { View, StyleSheet, TextInput, Button, Modal, Image, ImageBackground } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function textInputHandler(inputText){
        
        setEnteredGoalText(inputText); 
    }
    
    function addGoalsHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    // const image = {};
    return (
        <Modal animationType="slide" visible={props.visible}>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/download.jpg')} />
            <TextInput
                style={styles.textInput}
                placeholder=' Course goal'
                onChangeText={textInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.clickButton}>
                  <Button title='Add goal' onPress={addGoalsHandler} color="blue" />
                </View>
                <View style={styles.clickButton}>
                  <Button title="Cancel" onPress={props.cancel} color="green" />
                </View>
            </View>
        </View> 
      </Modal>
    ); 
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
      },
      image :{
        width: 280,
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        margin: 30
      },
      textInput: {
        width: '80%', 
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: 10,
        borderRadius:10,
        padding: 8,
        backgroundColor: 'white'
      },
      buttonContainer: {
        flexDirection: 'row'
      },
      clickButton: {
        padding: 10
      }
});