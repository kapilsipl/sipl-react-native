/**
 * Import all the screens that are going to be used in the app stack
 * Define them under DrawerNavigator as we want one inside our application
 * Export AppStack
 */
import Home from './home';
import Profile from './profile';
import DrawerComponent from './drawer';
import TabScreen from './tab-screen';
import UploadScreen from './upload';
import ConfirmationScreen from './confirm';
import GeoLocationScreen from './geolocation';
import { DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';

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
        },
        UploadScreen: {
            screen: UploadScreen
        },
        ConfirmationScreen: {
            screen: ConfirmationScreen
        },
        GeoLocationScreen : {
            screen: GeoLocationScreen
        }
    }, {
        contentComponent: DrawerComponent, /** This is our custom drawer component */
    }
);
export default AppStack;