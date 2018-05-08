import Login from './login';
import { StackNavigator } from 'react-navigation';

const AuthStack = StackNavigator(
	{
		Login: {
			screen: Login
		}
	},
	{
		headerMode: 'none'
	}
)

export default AuthStack;
