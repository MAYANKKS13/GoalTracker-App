import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalValue}>
            <Pressable 
              android_ripple={styles.android_style}
              onPress={props.onDeleteItem.bind(this, props.id)}
            >         
                <Text style={styles.goalText}>{props.text}</Text>  
            </Pressable>
        </View>
    );
 
};

export default GoalItem; 

const styles = StyleSheet.create({
    goalValue: {
        margin: 10,
        backgroundColor: 'cyan',
        borderRadius: 10,
        
    },
    goalText: {
        padding: 10,
        color: 'black'
    },
    android_style: {
        color:'#dddddd'
    }
});