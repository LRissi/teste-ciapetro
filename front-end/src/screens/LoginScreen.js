import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        androidClientId: '493290282168-0vc9fk3run465v6rj5c2c8q5rrnr632s.apps.googleusercontent.com',
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      alert(e);
      return { error: true };
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          activeOpacity={.8}
          style={[styles.button, {backgroundColor: '#ebeced'}]}
          onPress={() => this.signInWithGoogleAsync()}>
            <Text style={{color:'#000000'}}>Entrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={.8}
          style={[styles.button, {backgroundColor: '#e9d3f5'}]}
          onPress={() => alert('button 2')}>
            <Text style={{color:'#000000'}}>Continuar sem Conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 250,
    height: 50,
    marginBottom: 20,
  }
});
export default LoginScreen;
