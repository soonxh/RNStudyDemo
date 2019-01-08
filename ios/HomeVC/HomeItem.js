import React, {Component} from 'react';
import {Animated,Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,NavigatorIOS,PropTypes,Dimensions} from 'react-native';
import constants from '../Tool/constants';


export default class HomeItem extends Component<Props>{
    constructor(props){
        super(props)
    }

    render() {
        return(
           <View></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imageView: {
        // backgroundColor:'red',
        width:40,
        height:40,
    },
    TextView: {
        // backgroundColor:'green'
        left:10,
        width:constants.screenW - 50,
    },
});