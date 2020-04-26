import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosiac from './Mosiac';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

           
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    container:{
    

    }
});

export default App;
