import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,Linking,Share,SafeAreaView } from 'react-native';

import CardSetting from '../components/CardSetting';
import Rate from '../components/Rate';
import colors from '../config/colors';
const instaurl="https://www.instagram.com/a._.shaqlawa/";
function AccountScreen({navigation}) {
 const shareapp=()=>{
     try {
         Share.share({
             message:"hello iam using motivapp and i enjoy it "+ instaurl
         })
     } catch (error) {
         alert(error);
     }
 }
  const opneUrl=async(url)=>{
      const isSupported=await Linking.canOpenURL(url);
      if(isSupported){
          await Linking.openURL(url);

      }
      else{
          alert("can't open url")
      }
  }
    return (
        <SafeAreaView style={styles.con}>
     
           <Text style={styles.txt}>General</Text>
           <TouchableOpacity onPress={()=>navigation.navigate("Themes")}>
           <CardSetting  name="apps" title="Themes" color={colors.secondary} size={26}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Personal-Quotes")}>
           <CardSetting  name="pen" title="Personal Quotes" color={colors.personalQuote} size={26}/>
           </TouchableOpacity>
           <Text style={styles.txt}>App</Text>
           <TouchableOpacity onPress={()=>navigation.navigate("Rate")}>
           <CardSetting  name="message" title="Rate" color={colors.rate} size={26}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={shareapp}>
           <CardSetting  name="share" title="Share" color={colors.share} size={26}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{
               opneUrl(instaurl)
           }}>
           <CardSetting  name="instagram" title="Follow Us on Instagram" color={colors.instagram} size={26}/>
           </TouchableOpacity>
           

       
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    con:{
        flex:1,

    },
txt:{
    fontSize:24,
    fontWeight:"600",
    color:colors.white,
    marginHorizontal:5,
    padding:5,
    margin:16,

}
})
export default AccountScreen;