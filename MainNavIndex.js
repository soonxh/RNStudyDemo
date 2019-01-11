import React, {Component} from 'react';
import {NavigatorIOS} from 'react-native';
import MainTabIndex from './MainTabIndex'

export default class MainNavIndex extends Component {
    render(){
        return(
            <NavigatorIOS
                initialRoute={{
                    component:MainTabIndex,
                    title: this.props.title,
                    passProps: this.props.passProps,
                    translucent:false,
                    navigationBarHidden:true,
                }}
                style={{flex: 1}}
                renderScene={(route, navigator) => {    // 将板块生成具体的组件
                    let Component = route.component;    // 获取路由内的板块
                    return <Component {...route.params} navigator={navigator} />    // 根据板块生成具体组件
                }}
            />
        )
    }
}