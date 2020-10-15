import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { urlBaseApi } from '../config/Api';
import firebase from 'firebase';
class DashboradScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceCoin: "USD",
      destinyCoin: "",
      optionsCoins: {},
      convertedValue: ''
    };
    this.getCoinsFromApi();
  }

  getCoinsFromApi = () => {
    fetch(urlBaseApi + 'listCoins/').then(response =>
      response.json()
    ).then(json => {
      this.setState({optionsCoins: json.currencies});
    });
  }

  singOut = () => {
    firebase.auth().signOut();
  }

  changeSourceCoin = (coin) => {
    if (coin != "USD") {
      Alert.alert("Aviso!", "O Dólar é a única moeda permitida para conversão");
      return
    }
    this.setState({sourceCoin: coin});
  }

  submitConversao = () => {
    fetch(urlBaseApi + 'endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue'
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, styles.centeredContainer]}>
          <Image style={styles.logo} source={require("../../assets/ciapetro.png")} />
          <Text style={[styles.title, {color: '#0485c5'}]}>
            Converter
          </Text>
          <Picker
            selectedValue={this.state.sourceCoin}
            style={styles.pickerStyle}
            onValueChange={this.changeSourceCoin}
            >
            {Object.keys(this.state.optionsCoins).map((key) => {
                return (<Picker.Item label={this.state.optionsCoins[key]} value={key} key={key}/>)
              })}
          </Picker>
          {/* <Image style={styles.converter} source={require("../../assets/converter_money.png")} /> */}
          <Picker
            selectedValue={this.state.destinyCoin}
            style={styles.pickerStyle}
            onValueChange={coin =>  
              this.setState({destinyCoin: coin})}
            >
            {Object.keys(this.state.optionsCoins).map((key) => {
                return (<Picker.Item label={this.state.optionsCoins[key]} value={key} key={key}/>)
            })}
          </Picker>
          <TextInput
            placeholder="Valor a ser convertido"
            placeholderTextColor="#2b307e"
            style={styles.input}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.btn}>
            <Image style={styles.converter} source={require("../../assets/converter_coin.png")} />
          </TouchableOpacity>

          <Text style={styles.convertedValue}>
            {this.state.convertedValue}
          </Text>
        </View>
        <View>
          <TouchableOpacity 
            style={[styles.buttonBottom, {backgroundColor: '#fde01a'}]}
            onPress={() => this.singOut()}>
            <Text>Histórico de Conversão</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonBottom, {backgroundColor: '#0385c5'}]}
            onPress={() => this.singOut()}>
            <Text>Sing Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeddf',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 100
  },
  buttonBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
  logo: {
    width: '100%',
    height: 100,
    marginTop: -80,
    marginBottom: 50,
  },
  converter: {
    width: '35%',
    height: '70%'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 280,
    height: 45,
    textAlign: "center",
    borderRadius: 0,
    borderColor: "#2b307e",
    color: "#2b307e",
    borderWidth: 2,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    width: 120,
    height: 60,
    marginTop: 25,
    backgroundColor: "#fde01a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  convertedValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f9a23c",
    marginTop: 30,
  },
  pickerStyle: {  
    height: 50,  
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',  
  }
});

export default DashboradScreen;
