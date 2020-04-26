import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
             <Text style={{
                 textAlign:'center',
                 fontSize:15,
                 marginVertical:13,
                 color: '#ffff',

             }}> News Feeds </Text>
      </View>
    );
  }
}

const Styles=StyleSheet.create({
    container:{
                backgroundColor: '#ff7550',
                borderRadius:8,
                elevation:8,

    }
});

export default Heading;
