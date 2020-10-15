import React, { Component } from 'react';
import { View, StyleSheet, List, TouchableOpacity, FlatList, ListItem } from 'react-native';
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
      <View style={styles.container}>
        <List>
            <FlatList
                data={this.state.data}
                renderItem={({item}) => {
                    <ListItem
                        title={`${item.source_coin} -> ${item.destiny_coin}`}
                        subtitle={`Valor: ${item.value_to_convert} - Data: ${item.create_at}`}
                    />
                }}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderButtonRefresh}
            />
        </List>
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
    btnRefresh: {
      backgroundColor: '#0385c5',
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default HistoryScreen;
