import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initalMessages = [
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
    const [messages, setMessages] = useState(initalMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={require("../assets/profile.png")}
                        onPress={() => console.log("test", item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                )} 
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "T2",
                            description: "D2",
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessageScreen;