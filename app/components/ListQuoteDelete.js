import React from 'react';
import { View,TouchableOpacity,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "expo-vector-icons";
import colors from '../config/colors';
function ListQuoteDelete({onPress}) {
    return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.con}>
<MaterialCommunityIcons  name="trash-can" size={24} color={colors.white} />
           </View>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    con:{
        backgroundColor:"red",
        height:"100%",
   width:80,
   justifyContent:"center",
   alignItems:"center",
  
       
    }
})
export default ListQuoteDelete;