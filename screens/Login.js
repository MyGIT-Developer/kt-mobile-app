import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/kt_app.png')} />
                <PageTitle>Login</PageTitle>
                <FormContainer>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
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
            </InnerContainer>
        </StyledContainer>
    );
};

export default Login;
