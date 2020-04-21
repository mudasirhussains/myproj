import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

                    <View style={{alignItems: 'center',flex: 1,backgroundColor: 'pink',justifyContent: 'center', backgroundColor: 'yellow',}}>

                    <Text style={{}}> child 1 </Text>

                    </View>

                    <View style={{alignItems: 'center',flex: 1,backgroundColor: 'pink',justifyContent: 'center',}}>
                        <Text> child 2 </Text>
                        <Text style={{fontSize: 40}}> grand child 1 </Text>
                    </View>


      </View>


    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'teal',
        //flexDirection: 'row',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

    }
});

export default App;
