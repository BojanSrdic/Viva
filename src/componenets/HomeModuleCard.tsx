import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, Animated} from "react-native"

const DEVICEWIDTH = Math.round(Dimensions.get('window').width)
const RADIUS = 20;
const OFFSET = 50;
const HEIGHT = 150;

type HomeCardProps = {
    imageURI: any;
    title: string;
}

const HomeModuleCard = ({imageURI, title}: HomeCardProps) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.imageStyle} source={imageURI} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
}

// style={[styles.navbar, { transform: [{ translateY:  }]} ] }

const deviceWidth = Math.round(Dimensions.get('window').width)

const radius = 20;
const offset = 50;
const height = 150;

const styles = StyleSheet.create({
    container: {
        width: DEVICEWIDTH - OFFSET,
        height: HEIGHT,
        borderRadius: RADIUS,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: HEIGHT,
        width: DEVICEWIDTH - OFFSET,
        borderRadius: RADIUS,
        opacity: 0.9,
    },
    textStyle: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '800',
        alignSelf: 'center',
        textAlign: 'center',
        top: '40%',
    }
});

export default HomeModuleCard;
