import React,{useState,useEffect,useContext,useRef,useCallback} from 'react';
import {
  SafeAreaView,
  Text,View,StyleSheet,FlatList,Dimensions,ImageBackground,ActivityIndicator,TouchableOpacity  } from 'react-native';


import Test from '../components/Test';
import colors from '../config/colors';
import { useRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';
import { UserContext } from '../components/UserContext';


const {width,height}=Dimensions.get("screen");

    
function HomeScreen({name="Home",txtcolor,navigation,image,quoteUrl="https://romanqadir.github.io/jsonapi/testate.json"}) {


    const [isloading,setloading]=useState(true);
    const [data,setData]=useState([]);
    const onFavorite = restaurant => {
      setData([...data, restaurant]);
    };
  
    // function to remove an item from favorite list
    const onRemoveFavorite = restaurant => {
      const filteredList = data.filter(
        item => item.id !== restaurant.id
      );
      setData(filteredList);
    };
  
    // function to check if an item exists in the favorite list or not
    const ifExists = restaurant => {
      if (data.filter(item => item.id === restaurant.id).length > 0) {
        return true;
      }};
    
useEffect (()=>
{
fetch(quoteUrl)

.then((response)=> response.json())

.then((json)=> setData(json.quotes))

.catch((error)=> alert(error))
.finally(setloading(false));

},[]);
; 

// const renderheader=()=>{
//   return(
//     <TouchableOpacity >
//     <View style={{padding:20}}>
// <Text style={{color:colors.appscolor}}onPress={()=>navigation.navigate("Themes")}>fgfg</Text>
// </View>
// </TouchableOpacity>
//   )
// }
// const ShettRef=useRef<BottomSheet>(null);
// const [isopen,setIsOpen]=useState(true);
// const snapoints=["40%"];
    return (
      <ImageBackground source={image}
     
       style={styles.con}
      
       >
        
  { 
isloading ? <ActivityIndicator/>  :
<>

<FlatList
// ListHeaderComponent={renderheader}
pagingEnabled

data={data}
keyExtractor={({text},index )=> text}
renderItem={({item})=>
 (
   <Test quote={item.text}
   author={item.author}
   
 
txtcolor={txtcolor}
musicPress={()=>navigation.navigate("Music")}
onClick={()=>ifExists(item)? onFavorite(item):onRemoveFavorite(item)}
iconName={ifExists(item)?"bookmark-outline":"bookmark"}
   />
   
 )
}

/>

</>
  }
 
 
  </ImageBackground>

    );
}

const styles = StyleSheet.create({
    con:{
        width:width,
        height:height,
     
        backgroundColor:colors.black,
        alignItems:'center',
        justifyContent:"center",
      
        },
        topHeader:{
          width:"100%",
          padding:4,
          flexDirection:"row",
          justifyContent:"space-between"
        },
        txtHeader:{
          fontSize:20,
          fontWeight:"600",
          color:colors.white,
          margin:11,
        },
        iconnotify:{
          margin:9
        }
})
export default HomeScreen;