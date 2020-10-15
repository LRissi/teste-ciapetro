import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase';
import { urlBaseApi } from '../config/Api';

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itens: []
    };
    this.getItensHistories()
  }

  getItensHistories() {
      userId = firebase.auth().currentUser.uid;
      fetch(`${urlBaseApi}listByUser/${userId}`).then(response =>
        response.json()
      ).then(json => {
        this.setState({itens: json});
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>a</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HistoryScreen;
