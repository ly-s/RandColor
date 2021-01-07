import React, { Component } from 'react';
import { Button, View } from 'react-native';
import styles from './Styles';


class RandColor extends Component {
    constructor() {
        super();

        this.state={
            ColorState : '#00BCD4'
        }
    }

    //Use of RGB Color Wheel to generate numbers within its scope to extract colors
    RandColorFunc = () => {
        var RGBColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        this.setState({
            ColorState : RGBColor
        })
    }


    render() {
        return(
            <View style = {[styles.container, { backgroundColor: this.state.ColorState }]}>
                <Button
                    title = 'Click to change background color'
                    onPress = {this.RandColorFunc}
                />
            </View>
        );
    }
}

export default RandColor;