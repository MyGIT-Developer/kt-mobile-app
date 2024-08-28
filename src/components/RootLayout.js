// src/components/RootLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingNavbar from './FloatingNavbar'; // Adjust the import path as needed
import AppNavigator from './AppNavigator';

const RootLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppNavigator />
            <FloatingNavbar style={styles.floatingNavbar} />
        </View>
    );
};

const styles = StyleSheet.create({
    floatingNavbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60, // Adjust based on your FloatingNavbar height
        zIndex: 100, // Ensure it stays on top
    },
});

export default RootLayout;
