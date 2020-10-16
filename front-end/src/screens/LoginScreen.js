import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { urlBaseApi } from '../config/Api';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signInWithAnonymously = async () => {
    firebase.auth().signInAnonymously().then( user => {
      fetch(`${urlBaseApi}users/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          uid: user.user.uid
        }
      })
    });
  }

  signInWithGoogleAsync = async () => {
    alert('Não disponível no momento');
    // try {
    //   const result = await Google.logInAsync({
    //     behavior: 'web',
    //     androidClientId: '493290282168-0vc9fk3run465v6rj5c2c8q5rrnr632s.apps.googleusercontent.com',
    //     //iosClientId: YOUR_CLIENT_ID_HERE,
    //     scopes: ['profile', 'email'],
    //   });
  
    //   if (result.type === 'success') {
    //     this.onSignIn(result)
    //     return result.accessToken;
    //   } else {
    //     return { cancelled: true };
    //   }
    // } catch (e) {
    //   alert(e);
    //   return { error: true };
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonLogo}>
          <Image style={styles.logo} source={require("../../assets/ciapetro2.png")} />
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={.8}
          style={[styles.button, {backgroundColor: '#ffffff'}]}
          onPress={() => this.signInWithGoogleAsync()}>
            <Text style={{color:'#000000'}}>Entrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={.8}
          style={[styles.button, {backgroundColor: '#d9d50f'}]}
          onPress={() => this.signInWithAnonymously()}>
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
      justifyContent: 'center',
      backgroundColor: '#031c6e'
  },
  buttonLogo: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '50%',
    height: '50%',
    borderRadius: 30
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
