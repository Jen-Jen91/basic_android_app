import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Home"
            accessibilityLabel = 'Go to Home page'
            onPress={() => this.props.navigation.push('Home')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Details"
            accessibilityLabel = 'Go to Details page'
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  }
});