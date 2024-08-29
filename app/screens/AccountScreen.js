import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ListItem } from '../components/lists'
import Screen from '../components/Screen';
import Icon from '../components/Icon'

import colors from '../config/colors'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = (props) => {
    return (
        <GestureHandlerRootView>
            <Screen style={styles.screen}>
                <View style={styles.container}>
                    <ListItem title="Jugveer Sandher"
                        subTitle="jugveersandher@gmail.com"
                        image={require('../assets/profile.png')}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList 
                        data={menuItems}
                        keyExtractor={item => item.title}
                        renderItem={({ item }) => 
                            <ListItem 
                                title={item.title}
                                IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            />
                        }
                    />
                </View>
                <ListItem 
                    title="Logout"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }
                />
            </Screen>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
});

export default AccountScreen;