import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import Gateway from './gateway';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Gateway/>
      </View>
    );
  }
}