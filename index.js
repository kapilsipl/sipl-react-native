import React from 'react';
import {
    AppRegistry, YellowBox
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src';
const store = configureStore();

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Sample = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('Sample', () => Sample);