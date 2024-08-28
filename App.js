import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/AppNavigator';
import SplashScreen from './src/screens/SplashScreen'; // Splash screen component
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/screens/Login'; // Import Login screen if needed
import RootLayout from './src/components/RootLayout';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    setIsLoggedIn(true); // User is logged in
                } else {
                    setIsLoggedIn(false); // No user data, user needs to log in
                }
                setIsShowSplash(false); // Hide splash screen after checking login status
            } catch (error) {
                console.error('Failed to fetch user data', error);
                setIsShowSplash(false); // Hide splash screen even if there’s an error
            }
        };

        // Check login status when app starts
        checkLoginStatus();
    }, []);

    return (
        <NavigationContainer>
        <StatusBar style="dark" />
        {isShowSplash ? (
            <SplashScreen />
        ) : (
            <RootLayout />
        )}
    </NavigationContainer>
    );
}
