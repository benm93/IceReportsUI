import React from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Slider, TouchableHighlight, Alert, View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { ImagePicker } from 'expo';
import styles from '../../constants/Styles';

export default class Info extends React.Component {
  
    static navigationOptions = {
      title: 'SmugglersNotch',
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'stretch'}}>
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "#00bfff", alignItems: "center",}}>
            <Text style={{fontSize: 26, fontWeight: "bold", }}>Info page</Text>
          </View>
          <View style={{ flex: 4, justifyContent: 'flex-start' }}>
            <Text>Ice reports and shops and insta page and donate</Text>
          </View>
        </View>
      );
    }  
  }