import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{marginTop:10}}>
          <ImageBackground
          imageStyle={{borderRadius:10}} 
          style={{height:250}} 
          source={{uri: "https://www.eye7.in/wp-content/uploads/boy-closed-eyes-due-to-holi-colors.jpg"}}>

<LinearGradient  
start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} 
colors={['rgba(0,0,0,.1)','rgba(0,0,0,1)']}
style={{flexDirection:'row', borderRadius:10, position:'absolute', top:0, bottom:0, left:0, right:0}}>

          <Text style={{
              fontSize:22,
              color: '#ffff',
              fontWeight:"bold",
              alignSelf:'flex-end',
              paddingLeft:20,
              paddingBottom:10,
              
            
        
                     }}> Hodd on fire in his new Gotham Clip </Text>

</LinearGradient>
          </ImageBackground>
       
      </View>
    );
  }
}

export default Hero;
