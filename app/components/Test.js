import React,{useState,useEffect}from 'react';
import { Text,StyleSheet,View,Dimensions,TouchableOpacity,Share,SafeAreaView,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import {  MaterialCommunityIcons, MaterialIcons } from 'expo-vector-icons';
import { BottomSheet } from 'react-native-btr';
import { Audio } from 'expo-av';

const {width,height}=Dimensions.get("screen");

function Test({iconName,musicPress,navigation,quote,author,onClick,name,icon,txtcolor="white",Clickicon}) {
  // const [audioStatus,setAudioStatus]=useState(false);
  //   const [sound,setSound]=useState(new Audio.Sound());
  //   useEffect(()=>{
  //     (async()=>{
  //       console.log("status",audioStatus)
  //       if(audioStatus){

  //         await sound.loadAsync(
            
  //           require("../Tracks/music1.mp3")
        
  //         )
  //         setSound(sound);
          
  //         try {
  //           await sound.playAsync();
  //         } catch (e) {
  //           console.log(e);
  //         }
  //       }
  //       else{
  //         await sound.stopAsync()
  //         await sound.unloadAsync()
  //       }
  //     })()
  //   },[audioStatus])
 const [favorites,setfavorites]=useState('');
 const [visible, setVisible] = useState(false);

 const toggleBottomNavigationView = () => {
   //Toggling the visibility state of the bottom sheet
   setVisible(!visible);
 };

    const sharewallpaper=()=>{
        try {
         Share.share({
             message:" "+ quote+ "'"+author+ "'"
         })
        } catch (error) {
            console.log(error);
        }
    }

 
    return (
        <SafeAreaView style={styles.con}>
          
      
          <View style={{width,height}}>
          <View style={{flexDirection:"row",width:width,padding:25,justifyContent:"space-between",alignItems:"center",}}>
          {name &&<Text style={[{color:colors.white,fontSize:21,fontWeight:"600"},{color:colors[txtcolor]}]}>{name}</Text>}
          <TouchableOpacity onPress={musicPress}>
         { icon &&<MaterialCommunityIcons  name={icon} size={28}style={[{color:colors.white},{color:colors[txtcolor]}]}/>}
         </TouchableOpacity>
      </View>
      <View style={{justifyContent:"center",width,alignItems:"center",height:"80%"}}>
       <Text style={[styles.txtBreathe,{color:colors[txtcolor]}]} >Take a Deep Breathe</Text>
       { quote &&<Text style={[styles.txt,{color:colors[txtcolor]}]}>{quote}</Text>}
      
        
        {author &&<Text style={[styles.txtAuth,{color:colors[txtcolor]}]}>" {author} "</Text>}
        <View style={{flexDirection:"row",width:"70%",justifyContent:"space-around",alignItems:"center",padding:70}}> 
        <TouchableOpacity onPress={sharewallpaper}>
        <Ionicons name="share-outline" size={34} style={[{color:colors.white},{color:colors[txtcolor]}]} />

        </TouchableOpacity>
        <TouchableOpacity  onPress={toggleBottomNavigationView} >
        <MaterialCommunityIcons name={iconName}size={34} style={[{color:colors.white},{color:colors[txtcolor]}]} onPress={Clickicon}  />
    
        </TouchableOpacity>
        </View>

</View>
<BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
        
            <View
              style={{
                width:width,
                height:height/2.5,
                backgroundColor:colors.white,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              {/* <Button title="Play Sound" onPress={()=>setAudioStatus(!audioStatus)}color={audioStatus ?"red":"green"}>

     
</Button> */}
<MaterialCommunityIcons name="play"  size={30} color="dodgerblue"/>
                  </View>
            </BottomSheet>
        </View>
         
           </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    con:{

     
      justifyContent:"center",
      alignItems:"center"
      
   
     

    },
    txt:{
       

       fontStyle:"italic",
        margin:10,
        fontSize:24,
        fontWeight:"600",
  
     textAlign:"center"
     
        
       

    },
    txtAuth:{
       
fontSize:20,
margin:5,
color:colors.white,
    },
    txtBreathe:{
        
        fontSize:18,
        color:colors.white,
        textAlign:"center",
        margin:30,
      
    }
})
export default Test;