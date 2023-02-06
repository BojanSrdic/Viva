import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, Animated} from "react-native"
import { StatusBar } from "expo-status-bar";
import HomeModuleCard from "../../componenets/HomeModuleCard";
import VARIABLES from '../../constants/Variables';
import { TouchableOpacity } from "react-native-gesture-handler";

const image1 = require('../../../assets/post1.jpeg');
const image2 = require('../../../assets/post2.jpeg');
const image3 = require('../../../assets/post3.jpeg');
const image4 = require('../../../assets/post4.jpeg');
const image5 = require('../../../assets/post5.jpeg');

const DEVICEWIDTH = Math.round(Dimensions.get('window').width)
const HEIGHT = VARIABLES.HOMECARDHIGHT;
const ITEM_SIZE = HEIGHT + 25;

const Home = () => {
    const scrolly = React.useRef(new Animated.Value(0)).current;

    const onCardScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrolly } } }],
        { useNativeDriver: true }
    )

    const renderCard = ({ item, index } : {item: any, index: number}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)]
        const opacityinputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.8)]
        const scale = scrolly.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        })
        const opacity = scrolly.interpolate({
            inputRange: opacityinputRange,
            outputRange: [1, 1, 1, 0]
        })

        return (
            <Animated.View style={[styles.cardItemAnimatedView, { transform: [{ scale }] }, { opacity }]}>
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <HomeModuleCard key={item.id} imageURI={item.imageURI} title={item.title} />
                </TouchableOpacity>
            </Animated.View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden style="light" />
            <Animated.FlatList onScroll={onCardScroll} style={{ paddingTop: 20 }} data={seedDataHomeCard} renderItem={renderCard} 
                keyExtractor={(data) => data.id.toString()} showsVerticalScrollIndicator={false} />
        </View>
    );
}

// Exstract to navigation folder HomeFlatListNavigarion
const pressHandler = (id: any) => {
    throw new Error("Function not implemented.");
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#525252',
    },
    cardItemAnimatedView: {
        width: DEVICEWIDTH,
        alignItems: 'center',
        marginTop: 25,
    },
});

const seedDataHomeCard = [
    {
        id: 1,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 2,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 3,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 4,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 5,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 6,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 7,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 8,
        imageURI: image1,
        title: 'Disanje',
    },
    {
        id: 10,
    }
];

export default Home;