/**
 * Import all the screens that are going to be used in the app stack
 * Define them under DrawerNavigator as we want one inside our application
 * Export AppStack
 */

import Home from './home';
import Profile from './profile';
import DrawerComponent from './drawer';
import TabScreen from './tab-screen';
import { DrawerNavigator } from 'react-navigation';

const AppStack = DrawerNavigator(
    {
        Home: {
            screen: Home
        },
        Profile: {
            screen: Profile
        },
        TabScreen: {
            screen: TabScreen
        }
    }, {
        contentComponent: DrawerComponent, /** This is our custom drawer component */
    }
);

export default AppStack;