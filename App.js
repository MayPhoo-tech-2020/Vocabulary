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