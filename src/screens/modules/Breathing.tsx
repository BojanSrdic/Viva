import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, FlatList, Animated, LayoutChangeEvent, Dimensions, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import HomeModuleCard from "../../componenets/HomeModuleCard";

const image1 = require('../../../assets/post1.jpeg');
const image2 = require('../../../assets/post2.jpeg');
const image3 = require('../../../assets/post3.jpeg');
const image4 = require('../../../assets/post4.jpeg');
const image5 = require('../../../assets/post5.jpeg');

const h = Dimensions.get("window").height;
let navbarTranslate;

function Breathing() {

    const [scrollAnimation] = useState(new Animated.Value(0));
    const [offsetAnimation] = useState(new Animated.Value(0));
    const [clampedScroll, setClampedScroll] = useState(
        Animated.diffClamp(
            Animated.add(
                scrollAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: "clamp",
                }),
                offsetAnimation
            ),
            0,
            1
        )
    );
    navbarTranslate = clampedScroll.interpolate({
        inputRange: [0, 250],
        outputRange: [0, -250],
        extrapolate: "clamp",
    });
    const onLayout = (event: LayoutChangeEvent) => {
        let { height } = event.nativeEvent.layout
        setClampedScroll(
            Animated.diffClamp(
                Animated.add(
                    scrollAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: "clamp",
                    }),
                    offsetAnimation
                ),
                0,
                height
            )
        )
    }

    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }]} ] } onLayout={onLayout} >
                <Image source={require('../../../assets/post1.jpeg')} style={styles.imageBackgroundStyle}/>
                <LinearGradient colors={["rgba(82,82,82,1)", "transparent"]} style={styles.linearGradientStyle} >
                    <Text style={ styles.authorTextStyle} > Petar Petrovic </Text>
                </LinearGradient>
            </Animated.View>
            

            <Animated.FlatList
                onScroll={Animated.event(
                    [ { nativeEvent: { contentOffset: { y: scrollAnimation } } } ],
                    { useNativeDriver: true }
                )}
                contentContainerStyle={{ paddingTop: h*0.30 }}
                bounces={false}
                scrollEventThrottle={16}
                data={seedDataHomeCard}
                renderItem={({ item }) => {
                    return <HomeModuleCard key={item.id} imageURI={item.imageURI} title={item.title} />
                }}
                keyExtractor={(data) => data.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#525252',
        alignItems: 'center',
    },
    animatedViewStyle: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        height: 250,
        backgroundColor: "red",
    },
    imageBackgroundStyle: {
        height: 0.30 * h,
        width: "100%"
    },
    linearGradientStyle: {
        transform: [{ rotate: "180deg" }],
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        height: 0.16 * h,
    },
    authorTextStyle: {
        transform: [{ rotate: "-180deg" }],
        color: "#FFF",
        fontSize: 35,
        marginVertical: 30,
        alignSelf: "center",
    },
    navbar: { 
        position: "absolute", 
        top: 0, 
        right: 0, 
        left: 0, 
        zIndex: 1000, 
        height: h*0.30,
    }
});

export default Breathing;

const seedDataHomeCard = [
    {
        id: 1,
        imageURI: image1,
        title: 'Disanje',
    },
    {
        id: 2,
        imageURI: image2,
        title: 'Emocije',
    },
    {
        id: 3,
        imageURI: image3,
        title: 'Ishrana',
    },
    {
        id: 4,
        imageURI: image4,
        title: 'Treninzi',
    },
    {
        id: 5,
        imageURI: image5,
        title: 'Recepti',
    },
    {
        id: 6,
        imageURI: image1,
        title: 'Roditeljstvo',
    },
    {
        id: 7,
        imageURI: image2,
        title: 'Finansije',
    },
    {
        id: 8,
        imageURI: image3,
        title: 'Meditacija',
    },
    {
        id: 9,
        imageURI: image4,
        title: 'Muzika za fokus',
    },
];

