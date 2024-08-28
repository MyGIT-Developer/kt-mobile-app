// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search'; // Assuming you have a Search screen
import Profile from '../screens/Profile'; // Assuming you have a Profile screen
import Login from '../screens/Login'; // Import Login screen
import MainLayout from '../components/MainLayout';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home">
                {props => (
                    <MainLayout>
                        <Home {...props} />
                    </MainLayout>
                )}
            </Stack.Screen>
            <Stack.Screen name="Task">
                {props => (
                    <MainLayout>
                        <Search {...props} />
                    </MainLayout>
                )}
            </Stack.Screen>
            <Stack.Screen name="Absent">
                {props => (
                    <MainLayout>
              <Profile {...props} />
                    </MainLayout>
                )}
            </Stack.Screen>
            <Stack.Screen name="Profile">
                {props => (
                    <MainLayout>
                        <Search {...props} />
                    </MainLayout>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppNavigator;
