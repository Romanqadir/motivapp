import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';
import ListItemSeparator from './ListItemSeparator';
function Task({quote,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
       <View style={styles.con}>
           <Text style={styles.txt}>{quote}</Text>
          
       </View>
     
       </Swipeable>
    );
}
const styles = StyleSheet.create({
    con:{
width:"100%",
padding:15,
backgroundColor:colors.bgCategory,
alignContent:"center",
marginVertical:1,

    },
    txt:{
fontSize:17,
color:colors.white,
width:"100%"


    },
})

export default Task;