import React, { Component } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import data from './data';
import LinearGradient from 'react-native-linear-gradient';

class Mosiac extends Component {
  state={
      data:data
  }

  mosiac = () =>{
      return this.state.data.map(singleData=>{
          return(
              <View key={singleData.id} style={{height:200, margin:3, flexBasis:'48%',}}>
                <ImageBackground imageStyle={{borderRadius:15}} style={{height:200, }} source={{uri: singleData.image_link}}>

                    <LinearGradient  
                    start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} 
                    colors={['rgba(0,0,0,.1)','rgba(0,0,0,1)']}
                    style={{flexDirection:'row', borderRadius:15, position:'absolute', top:0, bottom:0, left:0, right:0}}>
                        <Text style={{paddingLeft:10,
                            paddingBottom:5,
                            fontSize: 15,
                            alignSelf:'flex-end',
                            color:'#fff',
                            fontWeight:'bold'}}> {singleData.headline}
                        </Text>

                    </LinearGradient>   
                </ImageBackground>

              </View>
          )
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.mosiac()}
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        height:700,
        flexWrap: 'wrap',
        flexDirection:'row',
        overflow:'hidden',
        justifyContent:'space-between',
        
    }
});

export default Mosiac;
