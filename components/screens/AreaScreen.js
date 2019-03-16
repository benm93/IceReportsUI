import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import styles from '../../constants/Styles';
import server from '../../constants/Server';

class AreaScreen extends React.Component {
  
  //Permissions.CAMERA_ROLL 
  
  constructor(props) {
    super(props);
    this.state = { Reports: [] };
  }
  
  goToReportScreen = (report) => {
    this.props.navigation.navigate('IceReport', {Report: report})
  };

  componentDidMount() {
    let reports = [];
    let area = this.props.navigation.state.params.AreaProp
    let url = `http://${server.IP}/area/${area}`;
    fetch(url)
    .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        response.json().then((data) => {
          data.forEach((report) => {
            reports.push(report)
            this.setState({Reports: reports});
          });
        });
        
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }



  render() {
    let area = this.props.navigation.state.params.AreaProp
    console.log(this.state)
    
    let reports = this.state.Reports.map((report, i) => {
      return (
        <TouchableHighlight key={i} style={styles.buttonContainer} onPress={() => this.goToReportScreen(report)} underlayColor="blue">
          <Text key={i} style={styles.buttonText}>{report.description}</Text>
        </TouchableHighlight>
      );
    });
    
    return (
      <View style={{ flex: 1, alignItems: 'stretch'}}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#00bfff", alignItems: "center",}}>
          <Text style={{fontSize: 26, fontWeight: "bold", }}>{area}</Text>
        </View>
        <View style={{ flex: 4, justifyContent: 'flex-start' }}>
          {reports}
        </View>
      </View>
    );
  }  
}
  
  export default AreaScreen