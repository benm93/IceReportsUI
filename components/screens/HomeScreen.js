import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import styles from '../../constants/Styles'
import server from '../../constants/Server';

class HomeScreen extends React.Component {
    
  //Permissions.CAMERA_ROLL 
  
  constructor(props) {
    super(props);
    this.state = { Areas: [] };
  }
  
  goToReports = (area) => {
    this.props.navigation.navigate('AreaScreen', {AreaProp: area})
  };

  componentDidMount() {

    let areas = [];
    fetch(`http://${server.IP}/api/areas`)
    .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        response.json().then((data) => {
          data.forEach((area) => {
            areas.push(area.name)
            this.setState({Areas: areas});
          });
        });
        
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }



  render() {

    let areas = this.state.Areas.map((area, i) => {
      return (
        <TouchableHighlight key={i} style={styles.buttonContainer} onPress={() => this.goToReports(area)} underlayColor="blue">
          <Text key={i} style={styles.buttonText}>{area}</Text>
        </TouchableHighlight>
      );
    });
    
    return (
      <View style={{ flex: 1, alignItems: 'stretch'}}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#00bfff", alignItems: "center",}}>
          <Text style={{fontSize: 26, fontWeight: "bold", }}>Climbing Areas</Text>
        </View>
        <View style={{ flex: 4, justifyContent: 'flex-start' }}>
          {areas}
        </View>
      </View>
    );
  }  
}
  
  export default HomeScreen