import React, { Component } from 'react'
import { View, TextInput, Button, AsyncStorage } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import styles from '../../../assets/styles';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    _login = () => {
        const { username, password } = this.state
        if (username == 'sipl' && password == 'sipl') {
            AsyncStorage.setItem('isLoggedIn', 'true')
            this.props.navigation.navigate('Home')
        } else {
            alert("User Name & password is sipl.");
        }
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
                    <Right  style={styles.flexOne} />
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
                        onPress={this._login}
                    />
                </View>
            </Container>
        );
    }
}