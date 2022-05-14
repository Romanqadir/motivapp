// import { FontAwesome,  } from 'expo-vector-icons';
// import React from 'react';
// import {Dimensions, View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,FlatList } from 'react-native';

// import colors from '../config/colors';
// import Card from './Card';

// const {width,height}=Dimensions.get("screen");

// function Category({navigation,image}) {
    
// //   const categoryItem=[
// //       {
// //           most:{
// //           id:1,
// //           section:"Over-Thinking",
// //           image:require("../assets/overthinking.png"),
// //           onClick:()=>navigation.navigate("over")
// //       }},
// //       {
// //           most:{
// //         id:2,
// //         section:"positive",
// //         image:require("../assets/positive.png"),
// //         onClick:()=>navigation.navigate("Home")
// //     }},
// //     {
// //         most:{
// //         id:1,
// //         section:"Over-Thinking",
// //         image:require("../assets/overthinking.png"),
// //         onClick:()=>navigation.navigate("over")
// //     }},
// //     {
// //         most:{
// //       id:2,
// //       section:"positive",
// //       image:require("../assets/positive.png"),
// //       onClick:()=>navigation.navigate("Home")
// //   }},

  
  
// //   ]

//     return (
//         <ScrollView>
//         <ImageBackground source={image} style={styles.container}>
//           <View style={styles.search}> 

//             <View>
//               <FontAwesome name="search" size={14} color="black"/>
//             </View>

//             <View style={{flex:1,}}>
//              <TextInput placeholder='search' style={styles.txtInput}/>
//            </View>
   
//           </View>
        
//              <View style={{padding:3}}>
//              <Text style={styles.txtTopic}>Most Popular</Text>
// {/* <FlatList
// numColumns={2}
// data={categoryItem}
// keyExtractor={id=>id.toString()}
// renderItem={({item})=>{
//     return(
//         <Card section={item.most.section} image={item.most.image} onClick={item.most.onClick}/>
//     )
// }}
// />
// <Text style={styles.txtTopic}>Most Popular</Text>
// <FlatList
// numColumns={2}
// data={categoryItem}
// keyExtractor={id=>id.toString()}
// renderItem={({item})=>{
//     return(
//         <Card section={item.section} image={item.image} onClick={item.onClick}/>
//     )
// }}
// /> */}
//           <View style={{width:width,flexDirection:"row",flexWrap:"wrap", justifyContent:"space-evenly",alignItems:"center"}}>
// <TouchableOpacity onPress={()=>navigation.navigate("Home",{myurl:"https://romanqadir.github.io/jsonapi/overthinking.json"})}>
//           <Card  section="Over Thinking" image={require("../assets/overthinking.png")} />
//           </TouchableOpacity>
//          <TouchableOpacity onPress={()=> navigation.navigate("Pos")}>
//           <Card section="Positive Thinking"   image={require("../assets/positive.png")}/>
//           </TouchableOpacity>
//           <Card  section="Self-Development" image={require("../assets/selfdev.png")} />
//           <Card  section="Toxic-Relationships" image={require("../assets/toxic.png")} />
       
//           </View>
//           <Text style={styles.txtTopic}>For You</Text>
//           <View style={{width:width,flexDirection:"row",flexWrap:"wrap", justifyContent:"space-evenly",}}>
//           <Card section="Night"  image={require("../assets/night.png")}/>
//           <Card  section="Short   Quotes" image={require("../assets/shortquotes.png")} />
//           <Card  section="Favorites"  image={require("../assets/favorites.png")}/>
//           <Card  section="Bussines" image={require("../assets/bussines.png")} />
//           <Card  section="Spring" image={require("../assets/spring.png")}/>
//           <Card  section="Work" image={require("../assets/work.png")}/>
//           <Card  section="Before a Game" image={require("../assets/game.png")}/>
//           <Card  section="Running" image={require("../assets/run.png")}/>
//               </View>
//               <Text style={styles.txtTopic}>Hard Times</Text>
//           <View style={{width:width,flexDirection:"row",flexWrap:"wrap", justifyContent:"space-evenly",padding:5,}}>
//           <Card section="Depression" image={require("../assets/depression.png")} />
//           <Card  section="Healing" image={require("../assets/healing.png")}/>
//           <Card  section="OverThinking" image={require("../assets/overthinking.png")}/>
//           <Card  section="Letting Go" image={require("../assets/go.png")}/>
//           <Card  section="Haters" image={require("../assets/haters.png")}/>
//           <Card  section="Death" image={require("../assets/death.png")}/>
//           <Card  section="Sadness"image={require("../assets/sadness.png")} />
//           <Card  section="HeartBroken" image={require("../assets/heartbroken.png")}/>
//               </View>
//           </View>
         

//         </ImageBackground>
//         </ScrollView>
//     );
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         padding:10,
//         alignItems:"center",
//         backgroundColor:colors.bgCategory,

//     },
//     search:{
//         width:"100%",
//         padding:10,
//         backgroundColor:colors.white,
//         borderWidth:1,
//         borderRadius:15,
//         marginLeft:10,
//         flexDirection:'row',
//         alignItems:"center"
        
        
//     },
//     txtInput:{
//         color:colors.txtCard,
//         fontSize:14,
//         fontWeight:"500",
      
//    marginLeft:10,
//     },
//     txtTopic:{
//         color:colors.white,
//         margin:5,
//         fontWeight:"600",
//         fontSize:18,
//         marginHorizontal:2,
//         padding:8
//     }
// })
// export default Category;
import { FontAwesome  } from 'expo-vector-icons';
import React,{useState,useEffect} from 'react';
import {Dimensions, View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,FlatList } from 'react-native';

import colors from '../config/colors';
import Card from './Card';

const {width,height}=Dimensions.get("screen");

function Categorey({navigation,image,index,text1="For You"}) {
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
        onClick:()=>navigation.navigate("home")
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



    <View style={{flexDirection:"row",backgroundColor:colors.white}}>
    <View style={{width,backgroundColor:colors.white,}}>
  
        </View>
    </View>
   

)
}

    return (
        <ScrollView>
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
        backgroundColor:colors.black,
    marginBottom:20,

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
export default Categorey;
