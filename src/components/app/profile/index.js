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

    /**
     * Code some necessary actions to be takes as soon as component mounts
     */
    componentDidMount() {
        /** Action method called to load the api as soon as the component is mounted */
        this.props.fetchPeopleFromAPI()
    }

    /**
     * Navigate back to home
     */
    changeScreen = () => {
        this.props.navigation.goBack();
    }

    /**
     * keyExtractor required by FlatList
     * @param {any} item - The item in loop
     * @param {Number} - the index of the current item
     */
    keyExtractor = (item, index) => index.toString()

    render() {
        const { isFetching, people } = this.props.people
        return (
            <View style={styles.container}>

                <View style={styles.textWrap}>
                    <Text style={styles.text}>Profile Screen</Text>
                </View>

                <View style={styles.textWrap}>
                    <Text onPress={this.changeScreen}>Click to return back home</Text>
                </View>

                <ActivityIndicator
                    animating={isFetching}
                />
                <FlatList
                    data={people}
                    extraData={this.props}
                    style={styles.myList}
                    keyExtractor={this.keyExtractor}
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