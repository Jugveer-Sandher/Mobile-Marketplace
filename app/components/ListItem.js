import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'
import AppText from '../components/AppText'

const ListItem = ({ title, subTitle, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <AntDesign name="user" size={50} color="black" marginRight={10}/>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
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