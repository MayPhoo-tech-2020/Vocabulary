// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import ViewAllVoc from './pages/ViewAllVoc';
import Category  from './pages/Category';
import GradeSevenUnits from './pages/GradeSevenUnits';
import Learn  from './pages/Learn';
import Test from './pages/Test';
import Choose from './pages/Choose';
import Match from './pages/Match';
import PrimaryScreen from './pages/PrimaryScreen';
import LowerSecondaryScreen from './pages/LowerSecondaryScreen';
import UpperSecondaryScreen from './pages/UpperSecondaryScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Vocabulary', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="PrimaryScreen"
          component={PrimaryScreen}
          options={{
            title: 'Primary', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="LowerSecondaryScreen"
          component={LowerSecondaryScreen}
          options={{
            title: 'Lower Secondary', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="UpperSecondaryScreen"
          component={UpperSecondaryScreen}
          options={{
            title: 'Upper Secondary', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="GradeSevenUnits"
          component={GradeSevenUnits}
          options={{
            title: 'Grade 7', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ route }) => ({ title: route.params.title,
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
           })}
        />
        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{
            title: 'Learn', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            title: 'Test', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{
            title: 'Choose', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Match"
          component={Match}
          options={{
            title: 'Match', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllVoc}
          options={{
            title: 'View All Vocabulary', //Set Header Title
            headerStyle: {
              backgroundColor: 'skyblue', //Set Header color
            },
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;