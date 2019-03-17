import React from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, Slider, TouchableHighlight, Alert, View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { ImagePicker } from 'expo';
import { ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS } from 'expo/build/IntentLauncherAndroid/IntentLauncherAndroid';
import AreaScreen from './components/screens/AreaScreen';
import ReportScreen from './components/screens/ReportScreen';
import HomeScreen from './components/screens/HomeScreen';
import NewReport from './components/screens/NewReportScreen';
import Info from './components/screens/InfoScreen';

async function alertIfRemoteNotificationsDisabledAsync() {
  const { Permissions } = Expo;
  const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== 'granted') {
    alert('Hey! You might want to enable notifications for my app, they are good.');
  } 
}

export const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  IceReport: {
    screen: ReportScreen,
  },
  AreaScreen: {
    screen: AreaScreen,
  }
}, {
    initialRouteName: 'Home',
});

export const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreenStack,
    navigationOptions: {
      tabBarLabel: "Browse Reports",
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: "Info",
    }
  },
  NewReport: {
    screen: NewReport,
    navigationOptions: {
      tabBarLabel: "New Report",
    }
  },
});




export default createAppContainer(TabNavigator);