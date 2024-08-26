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
} from './../components/styles';
import { login } from './../api/auth'; // Import the login function

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
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/kt_app.png')} />
                <PageTitle>Login</PageTitle>
                <FormContainer>
                    <Input placeholder="Username" value={username} onChangeText={setUsername} autoCapitalize="none" />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <SubmitButton onPress={handleLogin}>
                        <ButtonText>Login</ButtonText>
                    </SubmitButton>
                </FormContainer>
                {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;
