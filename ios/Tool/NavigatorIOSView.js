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
                    translucent:false
                }}
                style={{flex: 1}}
            />
        )
    }
}