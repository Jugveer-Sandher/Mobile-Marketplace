import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 50,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Chair',
        price: 125,
        image: require('../assets/couch.jpg')
    }
]

const ListingScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingScreen;