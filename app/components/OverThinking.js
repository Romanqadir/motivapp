import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList,Dimensions,ImageBackground,ActivityIndicator,Button  } from 'react-native';

import Test from '../components/Test';
const {width,height}=Dimensions.get("screen");
const quoteUrl="https://romanqadir.github.io/jsonapi/overthinking.json";
const posUrl="https://romanqadir.github.io/jsonapi/testate.json";
export const  OverThinking=({image})=> {
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
        <ImageBackground source={image} style={styles.con} >
    
  { 
isloading ? <ActivityIndicator/>  :
<FlatList

pagingEnabled

data={data}
keyExtractor={({id},index )=> index.toString()}
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
        
       
        backgroundColor:"black",
        alignItems:'center',
        justifyContent:"center",
      
        }
})


export default OverThinking;
