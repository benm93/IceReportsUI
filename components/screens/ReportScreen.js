import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image, Slider, TextInput } from 'react-native';
import styles from '../../constants/Styles';
import server from '../../constants/Server';

class ReportScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'IceReport',
  };

  render() {
    let {id, area, climbs, description, pictures, rating}  = this.props.navigation.state.params.Report;

    return (
      <View style={{ flex: 1, alignItems: 'stretch'}}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#00bfff", alignItems: "center",}}>
          <Text style={{fontSize: 26, fontWeight: "bold", }}>Chia 2/9</Text>
        </View>
        <View style={{ flex: 4, justifyContent: 'flex-start' }}>
          <View style={{height:200, alignItems: 'center', marginTop: 20 }}>
            <Image source={require('../../assets/images/ice.png')} />
          </View>
          <View style={{ height: 80, justifyContent: 'flex-end'  }}>
            <Text style={{fontSize: 20}}>Rating:</Text>
          </View>
          <Slider
            value={rating / 10}
          />
          <View style={{ height: 80, justifyContent: 'flex-end'  }}>
            <Text style={{fontSize: 20}}>Description:</Text>
          </View> 
          <View style={{ height: 200}}>
            <TextInput value={description} style={{borderColor: 'gray', borderWidth: 1, height:100, justifyContent: 'flex-start'}} />
          </View>
        </View>
      </View>
    );
    
   return null; 
  }
  
  
}

export default ReportScreen