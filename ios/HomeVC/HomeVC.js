import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList} from 'react-native';
import HomeItem from './HomeItem';


///练习导航栏
export default class HomeVC extends Component<Props> {
    constructor(props) {
        super(props)
        console.log('啦啦啦啦绿')
    }

    render() {
        return(
            <FlatList
                data={[
                    {key: 'Devin发送到发送到噶十多个是大嘎达是刚阿萨德噶山东高速gas的噶山东高速的'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <HomeItem txt={item.key}></HomeItem>}
            />
        );
    }

}
