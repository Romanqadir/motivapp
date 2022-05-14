import React from 'react';
import {View,StyleSheet,Text,Image,Dimensions,TouchableOpacity } from 'react-native';


import colors from '../config/colors';
const {width,height}=Dimensions.get("screen");
function Card({section,image,onClick}) {
    return (
       
        <TouchableOpacity onPress={onClick}>
           
       <View style={styles.container}>
     <View style={{width:105}}>
     { section &&<Text style={styles.txt}> {section}</Text>}
      </View>
      <View style={{alignSelf:'flex-end'}}>
   {  image && <Image  source={image} style={styles.img}/>}
      </View>
       </View>
       </TouchableOpacity>
    
    );
}
const styles = StyleSheet.create({
 
    container:{
     
      height:100,
        borderColor:colors.white,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:colors.cardcontainer,
      justifyContent:"space-between",
flexDirection:"row",
       margin:6,
       padding:2,
       width:width/2.2
      
    },
    img:{
width:60,
height:60,


alignSelf:"flex-end"
    },
    txt:{
color:colors.txtCard,
fontSize:16,
fontWeight:"500",

textAlign:"left"
    }
})
export default Card;