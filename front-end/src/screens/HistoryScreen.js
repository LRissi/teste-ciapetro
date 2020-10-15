import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Text, List, TouchableOpacity, FlatList, Item } from 'react-native';
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }

  renderButtonRefresh = () => {
    return (
      <TouchableOpacity style={styles.btnRefresh}
        onPress={() => this.getItensHistories()}>
        <Text>Atualizar</Text>
      </TouchableOpacity>
    );
  }

  getItensHistories = () => {
      userId = firebase.auth().currentUser.uid;
      fetch(`${urlBaseApi}listByUser/${userId}`).then(response =>
        response.json()
      ).then(json => {
        this.setState({itens: json});
      });
  }

  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DashboardScreen')}><Text>aaaa</Text></TouchableOpacity>
        {/* <FlatList //alert(JSON.stringify(this.state.itens)
            data={this.state.itens}
            renderItem={({item}) => {
                <Item
                    title={`${item.source_coin} -> ${item.destiny_coin}`}
                    subtitle={`Valor: ${item.value_to_convert} - Data: ${item.create_at}`}
                />
            }}
            // ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderButtonRefresh}
        /> */}
      </SafeAreaView >
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnRefresh: {
      backgroundColor: '#0385c5',
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default HistoryScreen;
