import React, {Component} from 'react';
import {NavigatorIOS} from 'react-native';

export default class NavigatorIOSView extends Component<Props> {
    render(){
        return(
            <NavigatorIOS
                initialRoute={{
                    component:this.props.component,
                    title: this.props.title,
                    passProps: {index: 1 },
                    translucent:false,
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