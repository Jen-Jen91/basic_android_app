import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import NavBar from './NavBar';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my first Android app!</Text>
        <Image source={require('../android_image.png')} style={styles.image} />
        <Text style={styles.description}>
            {'We can run this on a virtual device\nor directly on an Android phone!'}
        </Text>
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
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    color: 'white',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
});