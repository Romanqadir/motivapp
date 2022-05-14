
import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {MaterialCommunityIcons} from "expo-vector-icons";
import ListItemSeparator from './ListItemSeparator';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';
function CardSetting({name,color,size,title,TopTxt}) {
    return (
        <View>
       
        <View style={styles.container}>
    
   
<MaterialCommunityIcons name={name}size={size}color={color}/>
<Text style={styles.txt}>{title}</Text>
<MaterialCommunityIcons name="chevron-right" size={26}color={colors.white}/>
        </View>
        <ListItemSeparator/>
      
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
      padding:15,
      flexDirection:"row",
      alignItems:"center",
   
     

  } ,
  txt:{
fontSize:17,
flex:1,
marginHorizontal:20,
color:colors.white

  },
})

export default CardSetting;