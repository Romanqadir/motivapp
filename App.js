
import React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text,Button,Dimensions} from 'react-native';
import HomeScreen from './app/Screens/HomeScreen';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,AntDesign, Ionicons} from "expo-vector-icons";
import colors from './app/config/colors';
import Category from './app/components/Category';
import OverThinking from './app/components/OverThinking';
import Positive from "./app/components/OverThinking";
import FavoriteList from './app/components/FavoriteList';
import AccountScreen from './app/Screens/AccountScreen';
import Themes from './app/Screens/Themes';
import PersonalQuotes from './app/components/PersonalQuotes';
import QuotesTab from './app/components/QuotesTab';
import Rate from './app/components/Rate';
import Music from './app/components/Music';
import { BottomSheet } from 'react-native-btr';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

import { TouchableOpacity } from 'react-native-gesture-handler';

const {width,height}=Dimensions.get("screen");
const Tab = createBottomTabNavigator();

const Stack=createNativeStackNavigator();


//homestack is here



const HomeStackNavigator=({route,navigation})=>{
  
 
 const [visible, setVisible] = useState(false);

 const toggleBottomNavigationView = () => {
   //Toggling the visibility state of the bottom sheet
   setVisible(!visible);
 };
 const [audioStatus,setAudioStatus]=useState(false);
 const [sound,setSound]=useState(new Audio.Sound());
    useEffect(()=>{
      (async()=>{
        console.log("status",audioStatus)
        if(audioStatus){

          await sound.loadAsync(
            
            require("./app/Tracks/music1.mp3")
        
          )
          setSound(sound);
          
          try {
            await sound.playAsync();
          } catch (e) {
            console.log(e);
          }
        }
        else{
          await sound.stopAsync()
          await sound.unloadAsync()
        }
      })()
    },[audioStatus])
const {image,fixColor,txtcolor,myurl}=route.params;
  return(
    <Tab.Navigator name="Home" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        }
        else if (route.name === 'Settings') {
          iconName = focused ? 'menu' : 'menu';
        }
        // You can return any component that you like here!
        return <MaterialCommunityIcons name={iconName} size={32} color={color} />;
      },

      tabBarInactiveTintColor: colors.tabcolors,
      tabBarShowLabel:false,
      
    })}> 
      <Tab.Screen  name="Home" component={({navigation,route})=> <HomeScreen quoteUrl={myurl} image={image} txtcolor={txtcolor} navigation={navigation}/>} options={
        
        {headerTitleStyle:{color:"transparent"},headerLeft:()=>

          <View style={{width:"70%",justifyContent:"center",alignItems:"center"}}>
            
          <Text style={{color:colors.white,fontSize:21,fontWeight:"600"}}>Home</Text>
          </View>,headerRight:()=>
          <View style={{width:"50%",justifyContent:"center",alignItems:"center"}}>
          <View >
            
            <MaterialCommunityIcons name="music-note"size={26}color={colors.white} onPress={toggleBottomNavigationView}/>
          </View>
          <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
        
        <View style={{padding:30,width:width/3,bottom:"50%"}}>
            <View
              style={{
                width:width/1.2,
                height:height/5,
                backgroundColor:colors.mywhite,
        
        borderRadius:15,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
                
               
              
                
              }}>
            
          
            <AntDesign name="banckward" size={24} color="dodgerblue" />
<MaterialCommunityIcons name={audioStatus ?"pause":"play-circle"} size={30} color="dodgerblue" onPress={()=>setAudioStatus(!audioStatus)}/>
<AntDesign name="forward" size={24} color="dodgerblue" />

     

                  </View>
                  </View>
            </BottomSheet>
          </View>
          ,headerTransparent:true,headerShown:true,tabBarStyle:{backgroundColor:"transparent",position:"absolute",borderTopColor:"transparent"},
       }}  />
        <Tab.Screen name="Category" component={Category} options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Category') {
              iconName = focused
                ? 'appstore1'
                : 'appstore-o';
            } 
            // You can return any component that you like here!
            return <AntDesign name={iconName} size={26} color={color} />;
          },
   
          tabBarInactiveTintColor: colors.tabcolors,
          tabBarShowLabel:false})} />
        <Tab.Screen name="Favorite" component={()=><FavoriteList image={image}mycolor={txtcolor}/>} options={{headerShown:false,tabBarStyle:{backgroundColor:"transparent",position:"absolute",borderTopColor:"transparent"},
     }}/>
        <Tab.Screen name="Settings" component={AccountScreen} options={{headerStyle:{backgroundColor:colors.black},headerShown:true,tabBarStyle:{borderTopColor:"transparent",backgroundColor:"transparent",position:"absolute"},
      }}/>
        
    </Tab.Navigator>
      );
  
}

function WelcomeScreen({navigation,route})
{

  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  const [audioStatus,setAudioStatus]=useState(false);
    const [sound,setSound]=useState(new Audio.Sound());
    useEffect(()=>{
      (async()=>{
        console.log("status",audioStatus)
        if(audioStatus){

          await sound.loadAsync(
            
            require("./app/Tracks/music1.mp3")
        
          )
          setSound(sound);
          
          try {
            await sound.playAsync();
          } catch (e) {
            console.log(e);
          }
        }
        else{
          await sound.stopAsync()
          await sound.unloadAsync()
        }
      })()
    },[audioStatus])
  
//   async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
        
//        require("./app/Tracks/music1.mp3")
//     );
   
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync();
  
  
//   }
//   async function stopSound() {
//       console.log('Loading Sound');
//       const { sound } = await Audio.Sound.createAsync(
//          require("./app/Tracks/music1.mp3")
//       );
//       setSound(sound);
  
//       console.log('Playing Sound');
//       await sound.stopAsync(); }
//   React.useEffect(() => {
    
//   return sound
//     ? () => {
//         console.log('Unloading Sound');
//         sound.unloadAsync(); }
//     : undefined;
// }, [sound]);
// React.useEffect(() => {
//   return sound?
//    ()=>{
 
//         sound.unloadAsync(); 

//     }:
//     undefined;
//          }         ,[sound]);

  return(
    
<Tab.Navigator name="myhome"screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, image }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
   
                ? 'home' 
                : 'home-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'menu' : 'menu';
            }
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={32} color={color} />;
          },
   
          tabBarInactiveTintColor: colors.tabcolors,
          tabBarShowLabel:false,
        })}>
  <Tab.Screen  name="Home" component={HomeScreen }options={{headerLeft:()=>

  <View style={{width:"70%",justifyContent:"center",alignItems:"center"}}>
    
  <Text style={{color:colors.white,fontSize:21,fontWeight:"600"}}>Home</Text>
  </View>,headerRight:()=> <View style={{width:"50%",justifyContent:"center",alignItems:"center"}}>
          <View >
            
            <MaterialCommunityIcons name="music-note"size={26}color={colors.white} onPress={toggleBottomNavigationView}/>
          </View>
          <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
       
        >
        <View style={{padding:30,width:width/3,bottom:"50%"}}>
            <View
              style={{
                width:width/1.2,
                height:height/5,
                backgroundColor:colors.mywhite,
        
        borderRadius:15,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
                
               
              
                
              }}>
                <TouchableOpacity>
                <AntDesign name="banckward" size={24} color="dodgerblue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAudioStatus(!audioStatus)}  >
<MaterialCommunityIcons name={audioStatus? "pause":"play-circle"} size={30} color="dodgerblue" />
</TouchableOpacity>
<TouchableOpacity>
<AntDesign name="forward" size={24} color="dodgerblue" />
</TouchableOpacity>
     

                  </View>
                  </View>
            </BottomSheet>
          </View>
          ,headerTitleStyle:{color:"transparent"},headerTransparent:true,headerShown:true,tabBarStyle:{backgroundColor:"transparent",position:"absolute",borderTopColor:"transparent"},
       }}  />
    <Tab.Screen name="Category" component={Category} options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Category') {
              iconName = focused
                ? 'appstore1'
                : 'appstore-o';
            } 
            // You can return any component that you like here!
            return <AntDesign name={iconName} size={26} color={color} />;
          },
   
          tabBarInactiveTintColor: colors.tabcolors,
          tabBarShowLabel:false})} />
    <Tab.Screen name="Favorite"  component={FavoriteList} options={{headerShown:false,headerStyle:{backgroundColor:colors.black},tabBarStyle:{borderTopColor:"transparent",backgroundColor:"transparent",position:"absolute"},
    }}/>
    <Tab.Screen name="Settings" component={AccountScreen} options={{headerTitleAlign:'left',headerStyle:{backgroundColor:colors.black},tabBarStyle:{borderTopColor:"transparent",backgroundColor:"transparent",position:"absolute"},
    }}/>
   
</Tab.Navigator>

  );
}
// options={{headerTitleAlign:'left',headerStyle:{backgroundColor:colors.black,borderTopColor:colors.appscolor},headerTintColor
//     :colors.white,headerShown:true,tabBarStyle:{backgroundColor:colors.bgCategory,borderTopColor:"transparent"},
//     tabBarIcon: ({focused,color,size})=><AntDesign name="appstore-o" size={26} color={color} />}}

export default function App() {
 
 
  return (
 
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator >
<Stack.Screen  name="Home" component={WelcomeScreen}options={{headerShown:false,}}/>
<Stack.Screen name='home' component={HomeStackNavigator} options={{headerShown:false}} />

<Stack.Screen  name="over" component={OverThinking} options={{headerTransparent:true,headerBackTitleVisible:false}}/>
<Stack.Screen name="Pos" component={Positive}  options={{headerBackTitleVisible:false}}/>
<Stack.Screen name="Themes" component={Themes} options={{headerBackTitleVisible:false}} />
<Stack.Screen name="Personal-Quotes" component={PersonalQuotes} options={{headerBackTitleVisible:false,headerStyle:{backgroundColor:colors.black}}} />
<Stack.Screen name="QuotesTab" component={QuotesTab} options={{headerTransparent:true,headerTitleStyle:{color:"transparent"}}}/>
<Stack.Screen name="Rate"  component={Rate}/>
<Stack.Screen name="Music"  component={Music}/>
</Stack.Navigator>

    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  con:{
    flex:1,
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:"center",
    }
});
