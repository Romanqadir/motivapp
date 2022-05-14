import * as React from 'react';
import { Text, View, StyleSheet, Button,ImageBackground,Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
const {widht,height}=Dimensions.get("screen");
export default function App({image,navigation}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
        
       require("../Tracks/music2.mp3")
    );
   
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  
  
  }

    async function stopSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require("../Tracks/music2.mp3")
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.stopAsync(); }

  // React.useEffect(() => {
      
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
  return (

    <ImageBackground style={styles.container} source={image}>
      <Button title="Play Sound" onPress={playSound}>

     
      </Button>
      <Button title="stop sound" onPress={stopSound} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width:widht,
    height:height,
    justifyContent: 'center',
    
    padding: 10,

  },
});
