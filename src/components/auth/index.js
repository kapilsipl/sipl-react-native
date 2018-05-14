import { StackNavigator } from 'react-navigation';

import Login from './login';
import Register from './register';

const AuthStack = StackNavigator(
	{
		Login: {
			screen: Login
		},
		Register: {
			screen: Register
		}
	},
	{
		headerMode: 'none'
	}
)

export default AuthStack;
