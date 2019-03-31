import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Countdown from './components/Countdown';
import Tasks from './components/Tasks';
import Home from './components/Home';

const routes={
  'Home': Home,
  'Countdown':Countdown,
  'Tasks':Tasks
}

let stackNavigator = createStackNavigator(routes);

let AppContainer = createAppContainer(stackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}


const styles = StyleSheet.create({
 
});
