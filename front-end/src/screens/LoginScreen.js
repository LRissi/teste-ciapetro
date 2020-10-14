import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          activeOpacity={.8}
          style={[styles.button, {backgroundColor: '#ebeced'}]}
          onPress={() => alert('button 1')}>
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
