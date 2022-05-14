
import React,{useState,useEffect} from 'react';
import {SafeAreaView,Image,Text,View,StyleSheet,FlatList,Dimensions,ImageBackground,ActivityIndicator,Button  } from 'react-native';

import colors from '../config/colors';

import Test from './Test';


const {width,height}=Dimensions.get("screen");

export const  QuotesTab=({image=require("../assets/default.jpg"),mycolor="white",route})=> {
const [data,setData]=useState('');
const renderEmpty =()=>{
        return(
               
              
                <ImageBackground source={image} style={styles.con}>


<Text style={{color:colors.white,fontSize:21,fontWeight:"600",zIndex:1,position:"absolute"}}>Favorite List Is Empty</Text> 


                </ImageBackground>
               
        )
}
        return(
           
                <ImageBackground source={image}style={styles.con}>
               <FlatList
ListEmptyComponent={renderEmpty}
               data={data}
renderItem={({item})=>{
        return(
                <Test  name={item.hope} />
        )
}}
               />
                
               
                </ImageBackground> 

    );
}

const styles = StyleSheet.create({
    con:{
        width:width,
        height:height,
   zIndex:0,
     
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
