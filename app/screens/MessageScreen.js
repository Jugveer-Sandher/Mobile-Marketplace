import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
    }
]

const MessageScreen = (props) => {
    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                    />
                )} 
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessageScreen;