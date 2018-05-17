import React, { Component } from 'react'
import styles from '../../../assets/styles';
import { showToast } from '../../../helper'

import {
    View, Text
} from 'react-native'

import {
    Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form
} from "native-base";

class Home extends Component {

    /**
     * @method changeScreen
     * @description Navigate to profile screen on button press
     */
    changeScreen = () => {
        this.props.navigation.navigate('Profile');
    }

    /**
     * @method handleToastButton
     * @description Example for toast
     */
    handleToastButton = () => {
        showToast('Example toast');
    }

    /**
     * @method render
     * @description Renders the component
     */
    render() {
        return (
            <Container>
                <Header>
                    <Left style={styles.flexOne}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body style={styles.homeBody}>
                        <Title>Header</Title>
                    </Body>
                    <Right style={styles.flexOne} />
                </Header>
                <Content>
                    <View style={styles.container}>

                        <View style={styles.textWrap}>
                            <Text style={styles.text}>Home Screen</Text>
                        </View>

                        <View style={styles.textWrap}>
                            <Text onPress={this.changeScreen} style={styles.link}>Click to change screen</Text>
                        </View>

                        <View style={styles.textWrap}>
                            <Text style={styles.para}>
                                This is a minimal setup for starting react-native application. This setup includes redux, react-redux, redux-thunk, react-navigation and native base. For fetching APIs - axios is used. Profile component is connected to redux.
                        </Text>
                        </View>
                    </View>
                    <Button onPress={this.handleToastButton}>
                        <Text>Click to show Toast</Text>
                    </Button>
                </Content>
            </Container >
        )
    }
}

export default Home;