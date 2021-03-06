import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext'

import HomeScreen from './src/screens/Home'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/createScreen'
import EditScreen from './src/screens/editScreen'

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit:EditScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Blogs"
  }
})

const App = createAppContainer(stackNavigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}


