import React, { Component } from 'react'
import styles from '../../../assets/styles';
import { Toast } from '../../../helper'
import { HeaderComponent } from '../../common'

import {
    View, Text
} from 'react-native'

import {
    Container, Title, Content, Button, Icon, Right, Body, Left, Picker, Form
} from "native-base";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    componentWillUnmount() {
     /**   Toast.clearToastInstance(); */
    }

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
        Toast.showToast('Example toast', 'success');
    }

    /**
     * @method render
     * @description Renders the component
     */
    render() {
        return (
            <Container>
                <HeaderComponent
                    title='My home'
                    leftButton='menu'
                />
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
                    <View style={styles.textWrap}>
                        <Button onPress={this.handleToastButton}>
                            <Text style={styles.buttonText}> Click to show Toast </Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        )
    }
}

export default Home;