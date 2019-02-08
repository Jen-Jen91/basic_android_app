import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './home.js';
import DetailsScreen from './details.js';

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: "Home"
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;