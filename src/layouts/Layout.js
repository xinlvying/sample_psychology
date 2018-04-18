/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to HomePage!
        </Text>
        <Button
          title="Go to Page1"
          onPress={() => {
            navigation.navigate('Page1', { name: '动态title' });
          }}
        />
        <Button
          title="Go to Page2"
          onPress={() => {
            navigation.navigate('Page2');
          }}
        />
        <Button
          title="Go to Page3"
          onPress={() => {
            navigation.navigate('Page3', { title: '欢迎Page3' });
          }}
        />
        <Button
          title="Go to TabNav"
          onPress={() => {
            navigation.navigate('TabNav', { title: '欢迎TabNav' });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});