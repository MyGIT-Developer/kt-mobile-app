import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowSplash(false);
            3
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            {isShowSplash ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Homez} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}
