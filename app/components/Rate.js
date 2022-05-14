import { FontAwesome  } from 'expo-vector-icons';
import React,{useState,useEffect} from 'react';
import {Dimensions, View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,FlatList } from 'react-native';

import colors from '../config/colors';
import Card from './Card';

const {width,height}=Dimensions.get("screen");

function Rate({navigation,image,index,text1="For You"}) {
    const [isloading,setloading]=useState(true);
    const [data,setData]=useState([]);
    const [mydata,setmyData]=useState([]);
    const [newdata,setnewData]=useState([]);
    const[masteredData,setMasteredData]=useState([]);
    const[localdata,setlocaldata]=useState([]);
    const[harddata,setHardData]=useState([]);
    const[search,setSearch]=useState('');


    const CategoryItem=[
        {

        id:1,
        text:"OverThinking",
        image:require("../assets/overthinking.png"),
        onClick:()=>navigation.navigate("over")
        },
        {
        id:2,
        text:"Positive",
        image:require("../assets/positive.png"),
        },
        {
        id:3,
        text:"Self-Development",
        image:require("../assets/selfdev.png"),
        },
        {
            id:4,
            text:"Toxic-RelationShips",
            image:require("../assets/toxic.png"),
            }
        


    ]
    const CategoryItems=[
        {

        id:1,
        text:"Night",
        image:require("../assets/night.png"),
        onClick:()=>navigation.navigate("over")
        },
        {
        id:2,
        text:"Short Quotes",
        image:require("../assets/shortquotes.png"),
        },
        {
        id:3,
        text:"Favorites",
        image:require("../assets/favorites.png"),
        },
        {
            id:4,
            text:"Bussines",
            image:require("../assets/bussines.png"),
            },
            {
            id:5,
            text:"Spring",
            image:require("../assets/spring.png"),
            },
            {
                id:6,
                text:"Work",
                image:require("../assets/work.png"),
                },
                {
                    id:7,
                    text:"Before A Game",
                    image:require("../assets/game.png"),
                    },
                    {
                        id:8,
                        text:"Running",
                        image:require("../assets/run.png"),
                        }
        


    ]
    const CategoryItemss=[
        {

        id:1,
        text:"Depression",
        image:require("../assets/depression.png"),
        onClick:()=>navigation.navigate("over")
        },
        {
        id:2,
        text:"Healing",
        image:require("../assets/healing.png"),
        },
        {
        id:3,
        text:"Over Thinking",
        image:require("../assets/overthinking.png"),
        },
        {
            id:4,
            text:"Letting Go",
            image:require("../assets/go.png"),
            },
            {
            id:5,
            text:"Haters",
            image:require("../assets/haters.png"),
            },
            {
                id:6,
                text:"Death",
                image:require("../assets/death.png"),
                },
                {
                    id:7,
                    text:"Sadness",
                    image:require("../assets/sadness.png"),
                    },
                    {
                        id:8,
                        text:"Heart-Broken",
                        image:require("../assets/heartbroken.png"),
                        }
        


    ]
      
        const fetchnewPost=(response)=>{
    
                setData(CategoryItem);

                setMasteredData(CategoryItem);
                
         

}


useEffect (()=>
{
  setData(CategoryItem);
  setmyData(CategoryItems);
  setMasteredData(CategoryItem);
setlocaldata(CategoryItems);
setnewData(CategoryItemss);
setHardData(CategoryItemss);


},[]);


const setFilteredSearch=(text)=>{
    if(text) {
const newData=masteredData.filter((item)=>{
    const itemData=item.text  ? item.text.toUpperCase():
    "".toUpperCase();
    
    const textData=text.toUpperCase();


    return itemData.indexOf(textData) > -1;
    
    
});
setData(newData);

setSearch(text);

    } else {
        setData(masteredData);
     
        setSearch(text);
        
    }
    if(text){
        const newsdata=localdata.filter((item)=>{
            const itemsdata=item.text ? item.text.toUpperCase():
            "".toUpperCase();
            const textsdata=text.toUpperCase();
            return itemsdata.indexOf(textsdata) > -1;

        });
        setmyData(newsdata);
        setSearch(text);
       
    }
    else{
        setmyData(localdata);
        setSearch(text);
    }
    if(text){
        const newssdata=harddata.filter((item)=>{
            const itemssdata=item.text ? item.text.toUpperCase():
            "".toUpperCase();
            const textssdata=text.toUpperCase();
            return itemssdata.indexOf(textssdata) > -1;

        });
        setnewData(newssdata);
        setSearch(text);
       
    }
    else{
        setnewData(harddata);
        setSearch(text);
    }
}
//for render new separate componennt
const renderSeparate=()=>{ 
return(



    <View style={{flexDirection:"row"}}>
    <View style={{width,backgroundColor:"transparent",}}>
  
        </View>
    </View>
   

)
}

    return (
        <ScrollView >
        <ImageBackground source={image} style={styles.container}>
          <View style={styles.search}> 

            <View>
              <FontAwesome name="search" size={14} color="black"/>
            </View>

            <View style={{flex:1,}}>
             <TextInput placeholder='search' style={styles.txtInput} value={search} onChangeText={(text)=>setFilteredSearch(text)}/>
           </View>
   
          </View>
        
             <View style={{padding:3}}  >
             <Text style={styles.txtTopic}>Most Popular</Text>
<FlatList
numColumns={2}

data={data}

keyExtractor={(id,index)=> index.toString()}
renderItem={({item})=>{
    return(
   
        <Card section={item.text} image={item.image}onClick={item.onClick}/>

    
    )
}}
ItemSeparatorComponent={renderSeparate}
/>
{ text1 &&<Text style={styles.txtTopic}>{text1}</Text>}
<FlatList
numColumns={2}

data={mydata}

keyExtractor={(id,index)=> index.toString()}
renderItem={({item})=>{
    return(
   
        <Card section={item.text} image={item.image}onClick={item.onClick}/>

    
    )
}}
ItemSeparatorComponent={renderSeparate}
/>

<Text style={styles.txtTopic}>Hard Times</Text>
<FlatList
numColumns={2}

data={newdata}

keyExtractor={(id,index)=> index.toString()}
renderItem={({item})=>{
    return(
   
        <Card section={item.text} image={item.image}onClick={item.onClick}/>

    
    )
}}
ItemSeparatorComponent={renderSeparate}
/>
         
         </View>
        </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems:"center",
        backgroundColor:colors.bgCategory,
    marginBottom:40,

    },
    search:{
        width:"100%",
        padding:10,
        backgroundColor:colors.white,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        flexDirection:'row',
        alignItems:"center"
        
        
    },
    txtInput:{
        color:colors.txtCard,
        fontSize:14,
        fontWeight:"500",
      
   marginLeft:10,
    },
    txtTopic:{
        color:colors.white,
        margin:5,
        fontWeight:"600",
        fontSize:18,
        marginHorizontal:2,
        padding:8
    }
})
export default Rate;
