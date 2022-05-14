import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Dimensions,ImageBackground,ActivityIndicator,TouchableOpacity  } from 'react-native';


import Test from '../components/Test';
import colors from '../config/colors';
const {width,height}=Dimensions.get("screen");
const quoteUrl="https://romanqadir.github.io/jsonapi/testate.json";


function NestedHome({route,image}) {

    const [isloading,setloading]=useState(true);
    const [data,setData]=useState([]);


useEffect (()=>
{
fetch(quoteUrl)
.then((response)=> response.json())
.then((json)=> setData(json.quotes))
.catch((error)=> alert(error))
.finally(setloading(false));

},[]);

    return (
        <ImageBackground source={image}
        style={styles.con}>
         
   { 
 isloading ? <ActivityIndicator/>  :
 <FlatList
 
 pagingEnabled
 
 data={data}
 keyExtractor={({text},index )=> text}
 renderItem={({item})=>
  (
    <Test quote={item.text}
    author={item.author}
 
    />
 
  )
 }
 
 />
   }
  
  
   </ImageBackground>
 
     );

}
const styles = StyleSheet.create({
    con:{
        width:width,
        height:height,
       
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:"center",
      
        }
})
export default NestedHome;