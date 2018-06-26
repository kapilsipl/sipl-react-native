import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, List, ListItem } from "native-base";
import styles from '../../../assets/styles';

class GeoLocationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }


    geo_success() {
        alert("success");
    }

    geo_error() {
        alert("error");
    }

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
                        <Title>Geo Location</Title>
                    </Body>
                    <Right style={styles.flexOne} />
                </Header>
                <Content>
                    <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Latitude: {this.state.latitude}</Text>
                        <Text>Longitude: {this.state.longitude}</Text>
                        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                    </View>
                </Content>
            </Container>
        )
    }
}

export default GeoLocationScreen;
