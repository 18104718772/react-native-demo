/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, Image} from 'react-native';
// import 导入方式
import OtherInput from './otherTextInput';
// require 导入方式
// const OtherInput = require('./otherTextInput');

const dimensions = require('Dimensions');
const {width} = dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 1
    };
  };
  login = ()=>{
    alert("这里取到了全局的status：" + this.state.status);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.touxiang} source={require('./assets/img/wechat.png')}></Image>
        <View style={styles.inputWrap}>
          <TextInput style={styles.textInput} placeholder={'请输入用户名'}></TextInput>
          <TextInput style={styles.textInput} placeholder={'请输入密码'} password={true}></TextInput>
        </View>
        <TouchableHighlight style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>登陆</Text>
        </TouchableHighlight>
        <View style={styles.settingStyle}>
          <Text>无法登陆</Text>
          <Text>注册</Text>
        </View>
        <View style={styles.otherWay}>
          <Text>其他登陆方式</Text>
          <Image style={styles.otherImg} source={require('./assets/img/wechat.png')}></Image>
          <Image style={styles.otherImg} source={require('./assets/img/wechat.png')}></Image>
          <Image style={styles.otherImg} source={require('./assets/img/wechat.png')}></Image>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  inputWrap:{
    width: '100%',
  },
  touxiang: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 50,
    marginBottom: 30,
  },
  textInput:{
    height: 38,
    width: width,
    lineHeight: 38,
    backgroundColor: '#ffffff',
    marginBottom:1,
    padding:0,
    textAlign: 'center',
  },
  otherImg:{
    width: 40,
    height: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    height:40,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  settingStyle: {
    marginTop: 10,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  otherWay: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    bottom: 0,
    height: 80,
  }
});
