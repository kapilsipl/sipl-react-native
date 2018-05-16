/**
 * This is the one and only styles.js that will be maintained for the project
 * Any changes to related to the themes can be done here
 * We can define all the necessary variables like primaryColor, deviceHeight etc in this file
 * To make our style more clear, we can use module prefixes in style name.
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textWrap: {
        margin: 20
    },
    para: {
        textAlign: 'center'
    },
    link: {
        textDecorationLine: 'underline',
        color: 'blue',
    },
    listSeparator: {
        height: 1,
        backgroundColor: 'cyan',
        marginBottom: 10,
        marginTop: 10
    },
    myList: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 20,
    },
    myListHeader: {
        backgroundColor: 'grey',
        marginBottom: 10
    },
    headerText: {
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic'
    },
    homeBody: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    flexOne: {
        flex: 1
    },
    m20: {
        margin: 20
    },
})