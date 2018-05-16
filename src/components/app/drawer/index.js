import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native'
import { List, ListItem, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Drawer extends Component {

    onPress = () => () => {
        this.props.navigation.navigate('TabScreen')
    }

    onLogout = () => () => {
        AsyncStorage.clear()
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
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