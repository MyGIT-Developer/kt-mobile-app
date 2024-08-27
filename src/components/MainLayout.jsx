import React from 'react';
import { View, StyleSheet } from 'react-native';
import FloatingNavbar from './FloatingNavbar';
const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
                      <FloatingNavbar />
            {children}
  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainLayout;
