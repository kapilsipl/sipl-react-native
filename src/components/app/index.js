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
        contentComponent: DrawerComponent,
    }
);

export default AppStack;