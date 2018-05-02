/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './components/tab'

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Main></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1
 }
});
