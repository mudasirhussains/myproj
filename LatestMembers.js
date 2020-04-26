import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import data from './data';

class LatestMembers extends Component {
  

state={
  data:data
}
latestMembers=()=>{
  return this.state.data.map(singleData => {
    return(
      <View key={singleData.id} style={{alignItems:'center', paddingHorizontal:13, padding:5}}>
          <Image style={{
              borderRadius:25,
              height:50,
              width:50}} 
              source={{uri: singleData.user_avatar}}>
                </Image>

        <Text>{singleData.username}</Text>

      </View>
    )
  })
}


  render() {
    return (

<View>
      <View>
        <Text style={{fontSize:22, paddingTop:15, fontWeight:"bold"}}> LatestMembers </Text>
      </View>

            <View style={styles.container}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {this.latestMembers()}
              </ScrollView>
            </View>
</View>

    );
  }
}

const styles=StyleSheet.create({
  container:{
    paddingVertical:8,
    marginVertical:8,
    backgroundColor: '#a4b0be',
    borderBottomColor:8,
    borderRadius:8,

  }
});
  


export default LatestMembers;
