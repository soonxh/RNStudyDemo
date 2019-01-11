import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList} from 'react-native';
import HomeDetailItem from "./HomeDetailItem";
import NavigationBar from '../Tool/NavigationBar'
import constants from "../Tool/constants";


///练习导航栏
export default class HomeDetailVC extends Component<Props> {
    constructor(props) {
        super(props)
        console.log('啦啦啦啦绿')
    }

    render() {
        return(
            <View style={{backgroundColor:'#f4f4f4'}}>
                <NavigationBar title='详情' backButtonHidden={true} backOnPress={()=>this.props.navigator.pop()}/>
                <FlatList
                style={{height:constants.screenH - 64 + 20, top:-20}}
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
                renderItem={({item}) => <HomeDetailItem txt={item.key}></HomeDetailItem>}

                />
            </View>

        );
    }

}