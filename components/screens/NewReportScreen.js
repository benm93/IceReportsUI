import React from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Slider, TouchableHighlight, Alert, View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { ImagePicker } from 'expo';
import styles from '../../constants/Styles';

export default class NewReport extends React.Component {
  
    state = {
      image: null,
      descText: null,
    };
  
    _onPressButton () {
      Alert.alert("pressed!")
    }
  
    static navigationOptions = {
        title: 'New Report',
    };

    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
  
    render() {
      let { image } = this.state;
      return (
          <KeyboardAvoidingView style={{ flex: 1, alignItems: 'stretch', justifyContent: "flex-start"}} behavior="position">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{flex: 1, backgroundColor: 'red'}}>
              <View>
                <View style={{ height: 100, justifyContent: 'center', backgroundColor: "#00bfff", alignItems: "center",}}>
                  <Text style={{fontSize: 26, fontWeight: "bold", }}>New report</Text>
                </View>
                <View style={{height:200, alignItems: 'center', marginTop: 20 }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                      title="Pick an image from camera roll"
                      onPress={this._pickImage}
                    />
                    {image &&
                      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                  </View>
                </View>
                <View style={{ height: 80, justifyContent: 'flex-end'  }}>
                  <Text style={{fontSize: 20}}>Rating:</Text>
                </View>          
                <Slider
                  value={this.state.value}
                  onValueChange={value => this.setState({ value })}
                />
                <View style={{ height: 80, justifyContent: 'flex-end'  }}>
                  <Text style={{fontSize: 20}}>Description:</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TextInput multiline={true} placeholder='description' onChangeText={(text) => this.setState({text})} style={{borderColor: 'gray', borderWidth: 1, height:100, justifyContent: 'flex-start'}} />
            <TouchableHighlight style={styles.buttonContainer} onPress={() => console.log("submitted")} underlayColor="blue">
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
      );
    }  
  }