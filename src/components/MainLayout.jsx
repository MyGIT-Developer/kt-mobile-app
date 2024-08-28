import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FloatingNavbar from './FloatingNavbar';

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundBox} />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {children}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundBox: {
        position: 'absolute',
        top: 0, // Start from the top of the screen
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: '#148FFF',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        zIndex: 0, // Make sure it's behind the content but still visible
    },
    contentContainer: {
        flexGrow: 1,
        paddingBottom: 80, // Space for the FloatingNavbar
    },
    floatingNavbar: {
        position: 'absolute',
        bottom: 0, // Pin to the bottom of the screen
        left: 0,
        right: 0,
        height: 60, // Adjust based on your FloatingNavbar height
    },
});

export default MainLayout;
