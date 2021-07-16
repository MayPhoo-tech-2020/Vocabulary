import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import ViewAllVoc from './pages/ViewAllVoc';
import Category  from './pages/Category';
import GradeSevenUnits from './pages/GradeUnits';
import Learn  from './pages/Learn';
import Test from './pages/Test';
import Choose from './pages/Choose';
import Match from './pages/Match';

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
          name="GradeUnits"
          component={GradeSevenUnits}
          options={{
            title: 'Grade', //Set Header Title
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