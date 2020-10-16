import React, { Component } from 'react';
import {
  SafeAreaView, View, StyleSheet,
  Text, TouchableOpacity, SectionList,
  ActivityIndicator, Modal
} from 'react-native';
import { PricingCard } from 'react-native-elements';
import firebase from 'firebase';
import { urlBaseApi } from '../config/Api';
import Moment from 'moment';

class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itens: [],
        loading: false
    };
    this.getItensHistories()
  }

  getItensHistories = () => {
      userId = firebase.auth().currentUser.uid;
      fetch(`${urlBaseApi}listByUser/${userId}`).then(response =>
        response.json()
      ).then(json => {
        this.setState({itens: json, loading: false});
      });
  }

  goToDashboard = () => {
    this.props.navigation.navigate('DashboardScreen');
  }

  refresh = () => {
    this.setState({loading: true})
    this.getItensHistories();
  }
  render() {
    Moment.locale('en');
    return (
      <SafeAreaView  style={styles.container}>
        <Modal
          transparent={true}
          animationType={'none'}
          visible={this.state.loading}>
          <View style={styles.modalBackground}>
            <ActivityIndicator
              animating={this.state.loading} 
              color="#ffffff"
              size="large"/>
          </View>
        </Modal>
        <SectionList
          sections={[{
            title: '',
            data: this.state.itens
          }]}
          renderItem={({item}) =>
          <PricingCard
            color="#031c6e"
            title={`${item.source_coin} -> ${item.destiny_coin}`}
            price={`$${item.value_to_convert}`}
            info={[Moment(item.create_at).format('DD/MM/YYYY HH:mm:ss')]}
            button={{ title: ` ${item.conversion_value}`, icon: 'swap-horiz', iconColor: '#000000' }}
          />
        }
          ListEmptyComponent={() =>
            <Text>Você não realizou pesquisas</Text>
          }
          renderSectionHeader={({section}) => 
          <View style={{flex: 1, flexDirection: 'row', marginTop: 30, marginHorizontal: 14}}>
            <View style={styles.cntHeader}>
              <TouchableOpacity 
                style={[styles.btnHeader, {backgroundColor: '#0385c5'}]}
                onPress={() => this.goToDashboard()}
                >
                <Text style={styles.txt}>Voltar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cntHeader}>
              <TouchableOpacity 
                style={[styles.btnHeader, {backgroundColor: '#fde01a'}]}
                onPress={() => this.refresh()}>
                <Text style={styles.txt}>Atualizar</Text>
              </TouchableOpacity>
            </View>
          </View>}
          keyExtractor={(item, index) => index}
        />
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
    cntHeader: {
      width: '50%',
      height: 40
    },
    btnHeader: {
      height: '100%',
      justifyContent: "center",
      alignItems: "center"
    },
    txt: {
      justifyContent: "center",
      alignItems: "center"
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
});

export default HistoryScreen;
