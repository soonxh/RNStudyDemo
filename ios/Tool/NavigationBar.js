import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,PropTypes,Navigator,Button} from 'react-native';
import constants from "./constants";


export default class NavigationBar extends Component<props> {
    constructor(props){
        super(props)
        /*
        backTitle='返回'
        backOnPress=this.props.backOnPress
        backButtonHidden=this.props.backButtonHidden

        rightTitle=''
        rightOnPress=this.props.leftOnPress
        rightButtonHidden=this.props.backButtonHidden
        */


    }
    render(){
       
        return(
          <View style={styles.barStyle}>
              <View style={styles.leftButtonStyle}>
                  <Button
                      title={'返回'}
                      onPress={this.props.backOnPress}
                  ></Button>
              </View>

              <View>
                  <Text style={styles.titleStyle}>{this.props.title}</Text>
              </View>

              <View style={styles.rightButtonStyle}>
                  <Button

                      title={''}
                      onPress={this.props.rightOnPress}
                  ></Button>
              </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
    barStyle:{
        height:64,
        backgroundColor:'#f4f4f4',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    titleStyle:{
       fontSize:20,
    },

    leftButtonStyle:{
        width:50,
        height:30,
        backgroundColor:'red',
    },

    rightButtonStyle:{
        width:50,
        height:30,
        backgroundColor:'red',
    },
})