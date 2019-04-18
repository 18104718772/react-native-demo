/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class OtherInput extends Component{
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'red'}}
        onChangeText={(text) => this.setState({text})}
        keyboardType={'number-pad'}
        value={this.props.value}
      />
    );
  }
}
