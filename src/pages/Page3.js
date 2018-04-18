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
  Button,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Page3 extends Component {
  render() {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    const { params } = state;
    const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Page3!
        </Text>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text>{showText}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setParams({ title: text })
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
  input: {
    marginTop: 20,
    width: 360,
    height: 50,
    borderWidth: 1,
    borderColor: '#333'
  }
});
