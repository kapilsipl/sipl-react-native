import { SwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from './components/AuthLoadingScreen';
import AppStack from './components/app'; 
import AuthStack from './components/auth'; 

export default SwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	}
)