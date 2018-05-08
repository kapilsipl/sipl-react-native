import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../../assets/styles';
import { fetchPeopleFromAPI } from '../../../actions/People'

import {
    View, Text, ActivityIndicator, FlatList
} from 'react-native'

import {
    Header, Body
} from 'native-base';


class Profile extends Component {

    componentDidMount() {
        this.props.fetchPeopleFromAPI()
    }

    _changeScreen = () => {
        this.props.navigation.goBack();
    }

    _keyExtractor = (item, index) => index.toString()

    render() {
        const { isFetching, people } = this.props.people
        return (
            <View style={styles.container}>

                <View style={styles.textWrap}>
                    <Text style={styles.text}>Profile Screen</Text>
                </View>

                <View style={styles.textWrap}>
                    <Text onPress={this._changeScreen}>Click to return back home</Text>
                </View>

                <ActivityIndicator
                    animating={isFetching}
                />
                <FlatList
                    data={people}
                    extraData={this.props}
                    style={styles.myList}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={() => (
                        <View style={styles.listSeparator} />
                    )}
                    ListHeaderComponent={() => (
                        <Header style={styles.myListHeader} >
                            <Body>
                                <Text style={styles.headerText}>Flatlist is used to render content fetched from API</Text>
                            </Body>
                        </Header>
                    )}
                    renderItem={({ item }) => (
                        <View>
                            <Text>Name: {item.name}</Text>
                            <Text>Height: {item.height}</Text>
                        </View>
                    )}
                />

            </View >
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPeopleFromAPI: () => dispatch(fetchPeopleFromAPI())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)