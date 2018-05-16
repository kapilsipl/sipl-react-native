import React, { Component } from 'react';
import { View, TextInput, Button, AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import styles from '../../../assets/styles';
import ValidationComponent from '../../../helper/validations/index';

export default class Login extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = () => {
        const { username, password } = this.state
        if (username == 'sipl' && password == 'sipl') {
            AsyncStorage.setItem('isLoggedIn', 'true')
            this.props.navigation.navigate('Home')
        } else {
            alert("User Name & password is sipl.");
        }
    }

    register = () => {
        this.props.navigation.navigate('Register');
    }

    render() {
        const { username, password } = this.state
        return (
            <Container>
                <Header>
                    <Left style={styles.flexOne} />
                    <Body style={styles.homeBody}>
                        <Title style={{ alignSelf: 'center' }}>Login</Title>
                    </Body>
                    <Right style={styles.flexOne} />
                </Header>
                <View style={styles.m20}>
                    <TextInput
                        placeholder='Username'
                        value={username}
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <Button
                        title='Login'
                        onPress={this.login}
                    />
                    <View style={{ marginTop: 20 }} />
                    <Button
                        title='Register'
                        onPress={this.register}
                    />
                </View>
            </Container>
        );
    }
}