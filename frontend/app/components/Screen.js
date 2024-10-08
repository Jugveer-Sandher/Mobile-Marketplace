import React from 'react';
import { Platform, StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.view}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1
    },
    view: {
        flex: 1
    }
})

export default Screen;