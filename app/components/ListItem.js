import React from 'react';
import { View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import colors from '../config/colors'
import AppText from '../components/AppText'

const ListItem = ({ title, subTitle }) => {
    return (
        <View style={styles.container}>
            <AntDesign name="user" size={50} color="black" marginRight={10}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    subTitle: {
        color: colors.medium
    },  
    title: {
        fontWeight: "500"
    }
})

export default ListItem;