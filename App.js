/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,PropTypes,Navigator} from 'react-native';
import HomeVC from './ios/HomeVC/HomeVC';
import MessageVC from './ios/MessageVC/MessageVC';
import MineVC from './ios/MineVC/MineVC';
import NavigatorIOSView from './ios/Tool/NavigatorIOSView';
import constants from './ios/Tool/constants';
import TabNavigator from 'react-native-tab-navigator';

import MainNavIndex from './MainNavIndex';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    // 初始化函数(变量是可以改变的，充当状态机的角色)
    constructor(props){
        super(props);
        this.state = {
            selectTab: '0'
        }
    }

    render() {
        return (
        /*
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <RedText txt={'hhh'}></RedText>
      </View>
      */
            <MainNavIndex title=''/>
        );
  }
}


class AppView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {text:''};
        this._onPressButton = this._onPressButton.bind(this);

    }

    _onPressButton(){
        // Alert.alert('You tapped the button!')
        this.props.navigator.push({
            component: HomeVC,
            title: "详情",
            passProps: { index: 2 },
            translucent:false,
            leftButtonTitle:'返回',
            onLeftButtonPress:() => {this.props.navigator.pop()},  // 左边按钮点击事件
        });
    }

    render(){
        return(
            <View style={{backgroundColor: 'red',
                height:constants.screenH-constants.NavigatorHeight-constants.BottomHeight}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />

                <View style={{flex: 4, flexDirection: 'row',justifyContent:'center',alignItems: 'stretch',backgroundColor: 'powderblue'}}>
                    <View style={{width:30, backgroundColor: 'powderblue'}} />
                    <View style={{width:30, backgroundColor: 'skyblue'}} />
                    <View style={{width:30, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{flex:5}}>
                    <TextInput style={{height:40}}
                               placeholder='input here'
                               onChangeText={(text) => this.setState({text})}>

                    </TextInput>

                    <Text>{this.state.text}</Text>

                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight onPress={this._onPressButton}>
                            <View style={{width:100,flexDirection:'row',backgroundColor:'red',height:50,alignItems:'center',justifyContent:'center'}}>
                                <Text>按钮</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                <View style={{flex:6,backgroundColor:'#f3f3f3'}}>
                    <ScrollView>
                        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                        <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    </ScrollView>


                </View>
            </View>
        );
    }
}

///联系state
class RedText extends Component{
    constructor(props) {
        super(props)
        this.state = {isShowingText: true}

        // setInterval(() => {
        //         //     this.setState(pre => {
        //         //         return {isShowingText: !pre.isShowingText};
        //         //     })
        //         //
        //         // }, 1000);
    }


    render() {

      // 根据当前showText的值决定是否显示text内容
      if (!this.state.isShowingText) {
          return null;
      }

      return (
          <Text>{this.props.txt}</Text>
      );
  }
}


const styles = StyleSheet.create({
    tabbarStyle: {
        backgroundColor: '#ffffff',
        height: 49,
    },

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
