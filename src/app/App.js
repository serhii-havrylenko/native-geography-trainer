// @flow

import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/home-screen';
import StaticMap from './components/static-map';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  StaticMap: { screen: StaticMap },
});

export default App;
