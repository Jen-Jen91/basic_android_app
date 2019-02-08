import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import NavBar from './NavBar';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
   };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Information</Text>
        <FlatList
          data={[
            {key: 'Code written in Visual Studio'},
            {key: 'Built using React Native'},
            {key: 'Practice with React components, navigation, and stylesheets'},
            {key: 'Created on Windows and Android'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Image source={require('../rn_logo.png')} style={styles.image} />
        <NavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    color: 'white',
  },
  item: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});