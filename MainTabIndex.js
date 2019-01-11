import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,PropTypes,Navigator} from 'react-native';
import HomeVC from './ios/HomeVC/HomeVC';
import MessageVC from './ios/MessageVC/MessageVC';
import MineVC from './ios/MineVC/MineVC';
import NavigatorIOSView from './ios/Tool/NavigatorIOSView';
import constants from './ios/Tool/constants';
import TabNavigator from 'react-native-tab-navigator';

export default class MainTabIndex extends Component<props> {
    constructor(props){
        super(props);
        this.state = {
            selectTab: '0'
        }
    }

    render(){
        return(
            <TabNavigator
                tabBarStyle={styles.tabbarStyle}
            >
                <TabNavigator.Item
                    title='首页'
                    titleStyle={{color: '#9d9d9d'}}
                    selectedTitleStyle={{color: '#ed7f30'}}
                    selected={this.state.selectTab === '0'}
                    renderIcon={() =>
                        <Image source={require('./imageFile/homeIcon.png')}/>
                    }
                    renderSelectedIcon={() =>
                        <Image source={require('./imageFile/homeIcon_select.png')}/>
                    }
                    onPress={() => {
                        this.setState({
                            selectTab: '0'
                        })
                    }}
                >
                    {<HomeVC navigator={this.props.navigator}/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='消息'
                    selected={this.state.selectTab === '1'}
                    renderIcon={() =>
                        <Image source={require('./imageFile/chatIcon.png')}/>
                    }
                    renderSelectedIcon={() =>
                        <Image source={require('./imageFile/chatIcon_select.png')}/>
                    }
                    onPress={() => {
                        this.setState({
                            selectTab: '1'
                        })
                    }}
                >
                    {<MessageVC navigator={this.props.navigator}/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='我的'
                    selected={this.state.selectTab === '2'}
                    renderIcon={() =>
                        <Image source={require('./imageFile/myInformationIcon.png')}/>
                    }
                    renderSelectedIcon={() =>
                        <Image source={require('./imageFile/myInformationIcon_select.png')}/>
                    }
                    onPress={() => {
                        this.setState({
                            selectTab: '2'
                        })
                    }}
                >
                    {<MineVC navigator={this.props.navigator}/>}
                </TabNavigator.Item>

            </TabNavigator>

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