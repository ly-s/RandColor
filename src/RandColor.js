import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import styles from './Styles';


class RandColor extends Component {
    constructor() {
        super();

        this.state={
            BGColorState : 'yellow',
            TextColorState : 'black'
        }
    }

    //Use of RGB Color Wheel to generate numbers within its scope to extract colors
    RandColorFunc = () => {
        var RGBColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        var RGBText = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        this.setState({
            BGColorState : RGBColor,
            TextColorState : RGBText
        })
    }


    render() {
        return(
            <View style = {[styles.container, { backgroundColor: this.state.BGColorState}]}>
                <Text style = {{color: this.state.TextColorState, fontSize: 40, fontWeight: 'bold'}}>Sample Text</Text>
                <Button
                    title = 'Click to change background color'
                    onPress = {this.RandColorFunc}  
                />
            </View>
        );
    }
}

export default RandColor;