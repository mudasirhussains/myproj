import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosiac from './Mosiac';
import data from './data';





class App extends Component {
  state={
    data:data
  }

  render() {
    return (

<ScrollView>
      <View style = {{flex:1, padding:5}} >

          <View>
            <Heading/>
            <Hero/>
            <LatestMembers/>
          </View>

          <View>
            <Text style={{fontWeight:'bold', fontSize:22, paddingTop:10, marginLeft:8}}>Monday</Text>
          </View>

          <Mosiac/>
          <Text style={{fontSize:22, fontWeight:'bold', paddingLeft:10, marginTop:10}}>
            News
          </Text>

         

          <FlatList style={{width:'100%'}} 
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={({item}) => (
                      <View style={styles.rowStyle}>
                        <View style={styles.imageContainer}>
                          <Image source={{uri: item.image_link}} style={styles.imageStyle}/>
                        </View>

                        <View style={styles.rightSideContent}>
                        <Text style={
                                      {backgroundColor:'#7bed9f',
                                      width:90,
                                      textAlign:'center',
                                      borderRadius:6,
                                      paddingVertical:4,
                                      marginTop:5}
                                      } >{item.type}</Text>
                        <Text style={styles.headlines}>
                           {item.headline}
                        </Text>
                        

                            <View style={styles.avatarAndCaption}>
                                <Image style={{height:24, width:24, borderRadius:12}} source={{uri: item.user_avatar}}/>
                                <Text style={{paddingLeft:10}}>{item.username}</Text>
                            </View>

                        </View>

                      </View>
                    )}
                    />
          
           
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  rowStyle:{
    flexDirection:'row',
    borderRadius:6,
    backgroundColor:'#a4b0be',
    margin:5,
    

    },
    imageContainer:{
      margin:5,
      height:120,
      width:(Dimensions.get('window').width / 3) - 4

    },
    imageStyle:{
      flex:1,
      width:null,
      alignSelf:'stretch',
      borderRadius:6
    },
    rightSideContent:{
      width:(Dimensions.get('window').width / 1.5)
    
    }, 
    headlines:{
      fontSize:17,
      fontWeight:'bold'
      ,
      marginRight:10,
      paddingRight:15
    },
    avatarAndCaption:{
      flexDirection:'row',
      alignSelf:'stretch',
      paddingTop:15
    }
});

export default App;
