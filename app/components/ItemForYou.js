import React,{useState,useEffect} from 'react';
import { Dimensions, View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,FlatList } from 'react-native';
import Card from './Card';
const {width,height}=Dimensions.get("screen");
function ItemForYou({setFilteredSearch}) {
    const [isloading,setloading]=useState(true);
    const [data,setData]=useState([]);
    
    const[masteredData,setMasteredData]=useState([]);
    const[search,setSearch]=useState('');
    const CategoryItem=[
        {

        id:1,
        text:"OverThinking",
        image:"https://pixarimages.files.wordpress.com/2022/05/img_8221.png",
        onClick:()=>navigation.navigate("over")
        },
        {
        id:2,
        text:"Positive",
        image:"https://pixarimages.files.wordpress.com/2022/05/img_8240.png"
        },
        {
        id:3,
        text:"Self-Development",
        image:"https://pixarimages.files.wordpress.com/2022/05/img_8241.png"
        },
        {
            id:4,
            text:"Toxic-RelationShips",
            image:"https://pixarimages.files.wordpress.com/2022/05/img_8242.png"
            }
        


    ]
    const fetchnewPost=(response)=>{
        setData(CategoryItem);
        setMasteredData(CategoryItem);
        }
        useEffect (()=>
{
    fetchnewPost();


  

},[]);
//  setFilteredSearch=(text)=>{
//     if(text){
// const newData=masteredData.filter((item)=>{
//     const itemData=item.text ? item.text.toUpperCase():
//     "".toUpperCase();
//     const textData=text.toUpperCase();
//     return itemData.indexOf(textData) > -1;

// });
// setData(newData);

// setSearch(text);

//     } else {
//         setData(masteredData);
        
//         setSearch(text);
        
//     }
// }
const renderSeparate=()=>{
    return(
        <View style={{flexDirection:"row"}}>
        <View style={{width,backgroundColor:"transparent",}}/>
        </View>
    )
    }
    return (
        <FlatList
        numColumns={2}
        
        data={data}
        
        keyExtractor={(id,index)=> index.toString()}
        renderItem={({item})=>{
            return(
                <Card section={item.text} image={{uri:item.image}}onClick={item.onClick}/>
            )
        }}
        ItemSeparatorComponent={renderSeparate}
        />
    );
}
const styles = StyleSheet.create({
    
})
export default ItemForYou;