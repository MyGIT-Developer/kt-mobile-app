import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    FormContainer,
    Input,
    SubmitButton,
    ButtonText,
} from '../components/styles';
import { Text } from 'react-native';
import { login } from '../api/auth/auth';
import LogoKTApp from './../../assets/kt_app.png';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const data = await login(username, password);

            // Save login response data to local storage
            await AsyncStorage.setItem('userData', JSON.stringify(data));

            // Navigate to Home screen
            navigation.replace('Home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <LinearGradient
        colors={['#0853AC', '#0086FF', '#9FD2FF']} // Linear gradient colors
        style={{ flex: 1 }} // Ensure it covers the whole screen
        start={{ x: 0, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
    >
        <StatusBar style="dark" />
        <StyledContainer style={{ flex: 1, backgroundColor: 'transparent', justifyContent:"center" }}>
        <InnerContainer style={{ backgroundColor: '#fff', borderRadius: 10, maxHeight: '50vh' }}>
                <PageLogo resizeMode="cover" source={LogoKTApp} />
                <Text style={{ color: '#148FFF', fontSize: 18, fontWeight: '700'}}>
                    Log In Akun
                </Text>
                <FormContainer>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <Text style={{ color: '#148FFF', fontSize: 13, fontWeight: '500'}}>
                    Lupa Password?
                </Text>
                    <SubmitButton
                        onPress={handleLogin}
                        style={{
                            backgroundColor: '#148FFF',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            paddingVertical: 10,
                        }}
                    >
                        <ButtonText>Masuk</ButtonText>
                    </SubmitButton>
                </FormContainer>
                {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
            </InnerContainer>
        </StyledContainer>
    </LinearGradient>
    );
};

export default Login;
