import React, { Component } from 'react';
import { Image, View, TextInput, Button, AsyncStorage, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { Container, Content } from 'native-base';
import styles from '../../../assets/styles';
import { ValidationComponent } from '../../../helper';
import { HeaderComponent } from '../../common';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { LoginManager, LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import LinkedInModal from 'react-native-linkedin';

export default class Login extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: null,
            error: null,
            fb_name: '',
            fb_email: '',
            fb_profilepic: '',
            linkedin_name: '',
            linkedin_email: ''
        }
    }

    async componentDidMount() {
        await this._configureGoogleSignIn();
        await this._getCurrentUser();
    }

    /**
     * @method _configureGoogleSignIn
     * @description function to configure Google SignIn
     */
    async _configureGoogleSignIn() {
        await GoogleSignin.hasPlayServices({ autoResolve: true });
        const configPlatform = {
            ...Platform.select({
                ios: {
                    iosClientId: "433774120224-pvb621v796nerk15qfbumlvaaj5olvjc.apps.googleusercontent.com",
                },
                android: {
                    androidClientId: "433774120224-j54fa00l4kkkvu6uph9q1ervq9tirg84.apps.googleusercontent.com"
                },
            }),
        };

        await GoogleSignin.configure({
            ...configPlatform,
            webClientId: "433774120224-2k2ek8s7ejbmj510jd9dig1kobgci9cr.apps.googleusercontent.com",
            offlineAccess: false,
        });
    }

    /**
     * @method _getCurrentUser
     * @description function to get current google user
     */
    async _getCurrentUser() {
        try {
            const user = await GoogleSignin.currentUserAsync();
            this.setState({ user, error: null });
        } catch (error) {
            this.setState({
                error,
            });
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
     * @method _signIn
     * @description function to sign in google
     */
    _signIn = async () => {
        try {
            const user = await GoogleSignin.signIn();
            this.setState({ user, error: null });
        } catch (error) {
            if (error.code === 'CANCELED') {
                error.message = 'user canceled the login flow';
            }
            this.setState({
                error,
            });
        }
    };

    /**
     * @method _signIn
     * @description function to sign out google
     */
    _signOut = async () => {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState({ user: null });
    };


    /**
     * @method fbLoginCallback
     * @description fb Login callback
     */
    fbLoginCallback = (error, result) => {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            console.log('Result Name: ' + JSON.stringify(result));
            this.setState({
                fb_name: result.name,
                fb_email: result.email,
                fb_profilepic: result.picture.data.url
            });
        }
    }

    /**
     * @method render
     * @description Renders component
     */
    render() {
        const { username, password, user, error, fb_name, fb_email, fb_profilepic, linkedin_name, linkedin_email } = this.state;
        return (
            <Container>
                <HeaderComponent
                    title='Login'
                />
                <Content>
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

                    {/* FACEBOOK LOGIN  */}
                    <View style={styles.centerContent}>
                        <LoginButton
                            readPermissions={["email", "public_profile"]}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        alert("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        alert("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                            (data) => {
                                                const infoRequest = new GraphRequest(
                                                    '/me', {
                                                        accessToken: data.accessToken.toString(),
                                                        parameters: {
                                                            fields: {
                                                                string: 'picture,email,name'
                                                            }
                                                        }
                                                    }, this.fbLoginCallback
                                                );
                                                // Start the graph request.
                                                new GraphRequestManager().addRequest(infoRequest).start();
                                            }
                                        )
                                    }
                                }
                            }
                            onLogoutFinished={() => this.setState({
                                fb_name: '',
                                fb_email: '',
                                fb_profilepic: ''
                            })}
                        />
                        {/* FACEBOOK LOGIN END */}

                        {/* GOOGLE LOGIN  */}
                        {!user && (
                            <View style={styles.m20}>
                                <GoogleSigninButton
                                    style={{ width: 212, height: 48 }}
                                    size={GoogleSigninButton.Size.Standard}
                                    color={GoogleSigninButton.Color.Auto}
                                    onPress={this._signIn}
                                />
                                {error && (
                                    <Text>
                                        {JSON.stringify(error).toString()} code: {error.code}
                                    </Text>
                                )}
                            </View>
                        )}
                        {/* GOOGLE LOGIN END */}

                        {/* LINKEDIN LOGIN  */}
                        <View style={styles.m15}>
                            <LinkedInModal
                                permissions={['r_basicprofile', 'r_emailaddress']}
                                clientID="78mit6jvpgvlk5"
                                clientSecret="P7d33L9RL1vfQDiR"
                                redirectUri="https://localhost/auth/callback"
                                onSuccess={async (token) => {
                                    //alert(JSON.stringify(token.access_token));
                                    const baseApi = 'https://api.linkedin.com/v1/people/'
                                    const params = [
                                        'first-name',
                                        'last-name',
                                        'email-address'
                                        // add more fields here
                                    ]
                                    const response = await fetch(
                                        `${baseApi}~:(${params.join(',')})?format=json`,
                                        {
                                            method: 'GET',
                                            headers: {
                                                Authorization: 'Bearer ' + token.access_token
                                            }
                                        }
                                    )
                                    const payload = await response.json();
                                    this.setState({
                                        linkedin_name: payload.firstName + ' ' + payload.lastName,
                                        linkedin_email: payload.emailAddress
                                    })
                                }
                                }
                                onError={err => alert("Error " + JSON.stringify(err))}
                            />
                        </View>
                        {/* LINKEDIN LOGIN  END */}

                        {/* FACEBOOK USER DETAIL */}
                        {fb_name != '' && (
                            <View style={[styles.centerContent, styles.m20]}>
                                <Text style={styles.fbTextStyle}>Facebook Login Details</Text>
                                <Text style={styles.fbDetailTextStyle}>Name: {fb_name}</Text>
                                <Text style={styles.fbDetailTextStyle}>Email: {fb_email}</Text>
                                <Text style={styles.fbDetailTextStyle}>Profile Pic:</Text>
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={{ uri: fb_profilepic }}
                                />
                            </View>
                        )}

                        {/* GOOGLE USER DETAIL */}
                        {user && (
                            <View style={styles.centerContent}>
                                <Text style={styles.fbTextStyle}>Google Login Details</Text>
                                <Text style={styles.fbDetailTextStyle}>Name: {user.name}</Text>
                                <Text style={styles.fbDetailTextStyle}>Email: {user.email}</Text>

                                <TouchableOpacity onPress={this._signOut}>
                                    <View style={{ marginTop: 50 }}>
                                        <Text>Log out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}

                        {/* LINKEDIN USER DETAIL */}
                        {linkedin_name != '' && (
                            <View style={styles.centerContent}>
                                <Text style={styles.fbTextStyle}>LinkedIn Login Details</Text>
                                <Text style={styles.fbDetailTextStyle}>Name: {linkedin_name}</Text>
                                <Text style={styles.fbDetailTextStyle}>Email: {linkedin_email}</Text>
                            </View>
                        )}
                    </View>
                </Content>
            </Container>
        );
    }
}