import React from "react";
import { TabBarIconProps } from "../../interfaces/tabBarIcon.interface";
import { Image, StyleSheet } from "react-native";


const TabBarIcon: React.FC<TabBarIconProps> = ({routeName}) => {
    let imageSource: any;

    switch (routeName) {
        case 'Singup':
            imageSource = require('../../assets/img/Agreement.png');
            break;
        case 'Login':
            imageSource = require('../../assets/img/user.png');
            break;
        case 'Home':
            imageSource = require('../../assets/img/Home.png');
            break;
        default:
    }

    return (
        <Image source={imageSource} style={[styles.icon]} />
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
})

export default TabBarIcon;