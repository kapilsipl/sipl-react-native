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

    /**
     * @method login
     * @description login takes user the app stack by setting isLoggedIn in AsncStorage
     */
    login = () => {
        const { username, password } = this.state
        /**
         * For now simply allowing user to log in if he inputs username and password as 'sipl'
         * Else showing him alert with the username and password
         * In practical application login is going to be handled with actions as data will be provided by the api.
         */
        if (username == 'sipl' && password == 'sipl') {
            AsyncStorage.setItem('isLoggedIn', 'true')
            this.props.navigation.navigate('AuthLoading')
        } else {
            alert("User Name & password is sipl.");
        }
    }

    /**
     * @method register
     * @description navigate user to the Registration screen
     */
    register = () => {
        this.props.navigation.navigate('Register');
    }

    /**
     * @method render
     * @description Renders component
     */
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