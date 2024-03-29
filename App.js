import { useState } from 'react';
import { Text, Button, StyleSheet, View, FlatList, Image, ImageBackground } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
     setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalsHandler(enteredGoalText){
     setCourseGoals(currentGoal => [
        ...currentGoal,
        {
          text: enteredGoalText,
          id: Math.random().toString()
        }
      ]);
      endAddGoalHandler();
  }
  
  function deleteGoalHandler(id) {
    setCourseGoals(currentGoal => {
       return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>

      {/* <ImageBackground source={require('../assets/downloadsky.jpg')} resizeMode="cover"></ImageBackground> */}
      <Text style={styles.appHeading}>GoalTracker</Text>

      <Image style={styles.image} source={require('./assets/download (3).jpg')} />

      <View style={styles.mainButton}>
       <Button title='Add new goal' color="#5e0acc" onPress={startAddGoalHandler} />
      </View>

      <GoalInput 
          onAddGoal={addGoalsHandler}
          visible={modalIsVisible}
          cancel={endAddGoalHandler}
      />

      <View  style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id = {itemData.item.id}
                onDeleteItem={deleteGoalHandler} 
              />);
          }} 
          keyExtractor={(item, index) => {
              return item.id;
          }} 
          // style={styles.scrollview}
         />
        
      </View>

    </View>
  );
}
   
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: 'white'
  },
  // viewContainer: {
  //   paddingBottom: 20
  // },
   goalsContainer: {
    flex: 4
  },
  appHeading : {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 150,
    marginHorizontal: 86,
    paddingBottom: 50

  },
  mainButton: {
    marginTop: 50,
    justifyContent: 'center',
    marginBottom: 30
  },
  image: {
     height: 150,
     width: 150,
     marginTop: 30,
     marginLeft: 115
  }

});
