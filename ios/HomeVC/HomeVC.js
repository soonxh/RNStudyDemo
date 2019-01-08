import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,Button} from 'react-native';
import HomeItem from './HomeItem';
import constants from "../Tool/constants";

///练习导航栏
export default class HomeVC extends Component<Props> {
    constructor(props) {
        super(props)
        console.log('啦啦啦啦绿')
    }

    render() {
        return(
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <TopView></TopView>
                        <MiddleView></MiddleView>
                        <BottomView></BottomView>
                </ScrollView>
        );
    }

}

class TopView extends Component<props>{

    render(){
      return(
          <View style={styles.topViewContentView}>
              <Text style={styles.withdrawalText}>可提现金额</Text>
              <Text style={styles.moneyText}>555.00</Text>
              <Text style={styles.withdrawalText}>不可提现金额 ¥99.00</Text>
              <View style={styles.buttonContainer}>
                  <View style={styles.withdrawalButton}>
                      <Button
                          title={"提现"}
                          onPress={() => {
                              // Alert.alert("你点击了按钮！");
                              this.props.navigator.push({
                                  component: HomeVC,
                                  title: "详情",
                                  passProps: { index: 2 },
                                  translucent:false,
                                  leftButtonTitle:'返回',
                                  onLeftButtonPress:() => {this.props.navigator.pop()},  // 左边按钮点击事件
                              });
                          }}

                      ></Button>
                  </View>
                  <View style={styles.spaceView}>

                  </View>
                  <View style={styles.withdrawalButton}>
                      <Button
                          title={"账单明细"}
                          onPress={() => {
                              Alert.alert("你点击了按钮！");
                          }}
                      ></Button>
                  </View>
              </View>

          </View>
      )
    };
}

class MiddleView extends Component<props>{
    render(){
        return(
            <View style={styles.middleViewContainer}>
                <View style={styles.middleViewTop}>
                    <View style={styles.middleViewTopItem}>
                        <Text>访客次数</Text>
                        <Text>1747次</Text>
                    </View>

                    <View style={styles.middleViewTopItem}>
                        <Text>累积交易额</Text>
                        <Text>1596.90元</Text>
                    </View>

                    <View style={styles.middleViewTopItem}>
                        <Text>累积订单数</Text>
                        <Text>188单</Text>
                    </View>
                </View>


                <View style={styles.middleViewBottom}>

                </View>
            </View>
        )
    }
}

class BottomView extends Component<props> {
    render(){

        var items = [];
        for (var i = 0; i < 13; i++) {
            items.push(<BottomViewItem key={i}></BottomViewItem>)         //这里父组件Examines，嵌套了子组件<OnTask/>
        }
        return(
           <View style={styles.bottomViewContainer}>
               {items}
           </View>
        )
    }
}


class BottomViewItem extends Component<props> {
    render(){
        return(
            <View style={styles.bottomViewItem_inner}>
                <Image
                    style={styles.bottomViewItem_img}
                />
                <Text style={styles.bottomViewItem_txt}>啦啦啦</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    backGroundStyle:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ededed'
    },

   topViewContentView:{
       backgroundColor:'#1AABFF',
       height:180,
       justifyContent:'center',
       alignItems:'center',
   },

    withdrawalText:{
        color:'#ffffff',
        fontSize:16,
    },

    moneyText:{
        color:'#ffffff',
        fontSize:42,
    },

    buttonContainer:{
        flexDirection: 'row',
        top:10,
    },

    withdrawalButton:{
        width:100,
        height:30,
        backgroundColor:'#ffffff'
    },

    spaceView:{
        width:40,
        height:30,
    },

    //****
    middleViewContainer:{
      height:150,
        backgroundColor:'#F4F4F4'
    },

    middleViewTop:{
      flexDirection:'row',
       justifyContent:'center',
    },

    middleViewTopItem:{
       width:constants.screenW/3,
        height:50,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
    },

    middleViewBottom:{
        backgroundColor:'red',
        top:10,
        bottom:10,
        height:80,
    },

    //*****
    bottomViewContainer:{
        flexWrap:'wrap',
        flexDirection:'row',
    },

    bottomViewItem_inner:{
       width:(constants.screenW-1.5)/3,
        height:(constants.screenW-1.5)/3,
       backgroundColor:'#FFFFFF',
        borderBottomWidth:0.5,
        borderBottomColor:'#f1f1f1',
        borderRightWidth:0.5,
        borderRightColor:'#f1f1f1',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },

    bottomViewItem_img: {
       width:35,
        height:35,
        backgroundColor:'red'
    },

    bottomViewItem_txt: {
        fontSize:15,
        top:15,
    },

});

        