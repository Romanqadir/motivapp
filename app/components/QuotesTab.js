
import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Dimensions,ImageBackground,ActivityIndicator,Button  } from 'react-native';
import colors from '../config/colors';
import Test from './Test';


const {width,height}=Dimensions.get("screen");

export const  QuotesTab=({route, navigation})=> {
    const { task, otherParam } = route.params;
    const [isloading,setloading]=useState(true);
    const [data,setData]=useState([]);
  


    return (
        <ImageBackground source={require("../assets/natureBack.jpg")} style={styles.con} >
    
    <View>

    <Test quote={JSON.stringify(task)}/>
       </View>
 
  </ImageBackground>


    );
}

const styles = StyleSheet.create({
    con:{
        width:width,
        height:height,
       padding:10,
        backgroundColor:"black",
        alignItems:'center',
        justifyContent:"center",
      
        },
        txt:{
fontSize:20,
color:colors.white,
fontWeight:"500",
textAlign:'center',
        },
})


export default QuotesTab;
