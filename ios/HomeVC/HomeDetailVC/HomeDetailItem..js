import React, {Component} from 'react';
import {Animated,Platform, StyleSheet, Text, View,TextInput,TouchableHighlight,
    Alert,Image,ScrollView,FlatList,SectionList,NavigatorIOS,PropTypes,Dimensions} from 'react-native';
import constants from '../Tool/constants';


export default class HomeDetailItem extends Component<Props>{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <FadeInView style={styles.container}>
                <Image style={styles.imageView} source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={styles.TextView}>{this.props.txt}</Text>
            </FadeInView>
        );
    }
}

class FadeInView extends React.Component{
    state = {
        fadeAnim:new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:1,
                duration:10000,
            }
        ).start();
    }

    render() {
        let {fadeAnim} = this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                }}
            >
                {this.props.children}
            </Animated.View>
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