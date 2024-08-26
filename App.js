import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

//screeen
import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsShowSplash(false);
        }, 3000);
    });
    return <>{isShowSplash ? <SplashScreen /> : <Login />}</>;
}
