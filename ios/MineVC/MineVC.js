import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList} from 'react-native';
import NavigationBar from '../Tool/NavigationBar'


export default class MessageVC extends Component<Props> {
    render() {
        return(
            <View style={{backgroundColor:'#f4f4f4'}}>
                <NavigationBar title='我的'/>
            </View>
        );
    }

}