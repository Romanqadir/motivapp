import React,{useState} from 'react';
import { View,StyleSheet,Text,KeyboardAvoidingView,TextInput,Platform,TouchableOpacity,Keyboard,ScrollView} from 'react-native';
import {MaterialCommunityIcons} from "expo-vector-icons";
import Task from './Task';
import colors from '../config/colors';
import ListQuoteDelete from './ListQuoteDelete';
import ListItemSeparator from './ListItemSeparator';



function PersonalQuotes({navigation}) {
    const [task,setTask]=useState();
    const [items,taskItems]=useState([]);
    const handlerClick=()=>{
        Keyboard.dismiss();
        if(task!= null)
        {
            taskItems([...items,task])
            setTask(null);
        }
        else{
            alert("please write something");
        }
  
    }
    const deleteItem=(index)=>{
      let itemscopy=[...items];
      itemscopy.splice(index,1);
      taskItems(itemscopy);
    }
    return (
        
       <View style={styles.conatiner}>
            <KeyboardAvoidingView style={styles.writeTextWrapper}
 behavior={Platform.OS==="ios"? "padding" :"height"}
 >
     <View style={{flex:1,}}>
<TextInput style={styles.txtInput} maxLength={200} value={task} onChangeText={text=>setTask(text)}  placeholder="Write Quote here"placeholderTextColor={"grey"}/>
</View>
<TouchableOpacity onPress={()=>handlerClick(task)}>
<View  style={styles.icon}>
    
<Text style={{color:colors.bgCategory,fontSize:16,fontWeight:"500"}}>Add</Text>

</View>
</TouchableOpacity>
 </KeyboardAvoidingView>
 <ListItemSeparator/>
        <ScrollView style={{flex:1,}}>
           {
              
               items.map((item,index)=>{

                   return(
                   
                     
              <TouchableOpacity key={index}  onPress={()=>navigation.navigate("QuotesTab",{task:item})}>
                   <View >
                   <ListItemSeparator/>
                       <Task  quote={item}
                       renderRightActions={()=>{
                           return(
                         <ListQuoteDelete onPress={()=>deleteItem(index)}/>
                           )
                       }}
                       />
                      </View>
                     
                      </TouchableOpacity>
                    
                   
                     
                   )
               })
           }
 
 </ScrollView>


       </View>
    );
}
const styles = StyleSheet.create({
    conatiner:{
flex:1,


    },
    writeTextWrapper:{

flexDirection:'row',
alignItems:'center',
flex:0.12,
backgroundColor:colors.black,


    },
    txtInput:{

    height:50,
 
       padding:10,

        borderRadius:12,
        borderWidth:1,
  
   backgroundColor:colors.white,
       color:colors.bgCategory,
        fontSize:16,
        marginHorizontal:5,
  
    },
    icon:{
width:75,
height:48,
borderRadius:12,
borderWidth:1,
backgroundColor:colors.white,
borderColor:colors.white,
alignItems:"center",
justifyContent:'center',
marginRight:10,
    }
})
export default PersonalQuotes;