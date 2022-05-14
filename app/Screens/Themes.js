import React from 'react';
import { View,StyleSheet,Text,Image,ImageBackground,Dimensions,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../config/colors';
const {width,height}=Dimensions.get("screen");
function Themes({navigation}) {

    return (
        <ScrollView>
   <View style={styles.con}>
      
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back16.jpg")
           ,fixColor:colors.white
           })} >
           <Image style={styles.img} source={require("../assets/back16.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back17.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back17.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back18.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back18.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back1.jpg"),
           fixColor:colors.white
           })} >
           <Image style={styles.img} source={require("../assets/back1.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back2.jpg")
        
           })} >
           <Image style={styles.img} source={require("../assets/back2.jpg")}  />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back3.jpg"),
           })} >
           <Image style={styles.img} source={require("../assets/back3.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back4.jpg"),
           fixColor:colors.white
           })} >
           <Image style={styles.img} source={require("../assets/back4.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back5.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back5.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back6.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back6.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back7.jpg"),
           fixColor:colors.white
           })} >
           <Image style={styles.img} source={require("../assets/back7.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back8.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back8.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back9.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back9.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back10.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back10.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/default.jpg"),
           fixColor:colors.white
           })} >
           <Image style={styles.img} source={require("../assets/default.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back12.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back12.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back13.jpg"),txtcolor:colors.appscolor
           })} >
           <Image style={styles.img} source={require("../assets/back13.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back14.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back14.jpg")} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("home",{
           image:require("../assets/back15.jpg")
           })} >
           <Image style={styles.img} source={require("../assets/back15.jpg")} />
           </TouchableOpacity>
        
           </View>
           </ScrollView>
    
    );
}
const styles = StyleSheet.create({
    con:{
flex:1,
flexDirection:"row", 
flexWrap:"wrap",


    },
    img:{
width:width/3.3,
height:170,
margin:5,
borderRadius:7

    },
})
export default Themes;