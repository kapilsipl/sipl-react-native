/**
 * This is the Drawer component
 * Anything inside this file will be there in the drawer
 */

import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native'
import { List, ListItem, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Drawer extends Component {
    
    /**
     * Navigate to tab screen on button press
     */
    onPress = () => () => {
        this.props.navigation.navigate('TabScreen')
    }

    /**
     * Clear AsyncStorage and navigate user to AuthLoading screen
     */
    onLogout = () => () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://i.ytimg.com/vi/TZ7aoZG11Cc/maxresdefault.jpg' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <List>
                        <ListItem>
                            <Text onPress={this.onPress()}>Tab Screen</Text>
                        </ListItem>
                        <ListItem>
                            <Text onPress={this.onLogout()}>Logout</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}