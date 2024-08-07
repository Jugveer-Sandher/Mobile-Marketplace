import React from 'react';
import { Platform, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        flex: 1
    }
})

export default Screen;