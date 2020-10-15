import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DashboradScreen from './src/screens/DashboardScreen';
import DetailScreen from './src/screens/DetailScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/Firebase';

firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
    <AppNavigator />
  );
}

const AppSwichNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboradScreen,
  HistoryScreen: HistoryScreen,
  DetailScreen: DetailScreen,
})

const AppNavigator = createAppContainer(AppSwichNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
