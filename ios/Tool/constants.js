import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';

///**********常量文件

function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((this.screenH === this.X_HEIGHT && this.screenW === this.X_WIDTH) ||
            (this.screenH === this.X_WIDTH && this.screenW === this.X_HEIGHT))
    )
}

const constants = {
    //设备宽高
    screenW : Dimensions.get('window').width,
    screenH : Dimensions.get('window').height,
    // iPhoneX
    X_WIDTH: 375,
    X_HEIGHT : 812,
    //导航栏高度
    NavigatorHeight : isIphoneX()?88:64,
    //iphonex底部高度
    BottomHeight : isIphoneX()?34:0,
};

export default constants;


