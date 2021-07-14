// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="Primary"
            customClick={() => navigation.navigate('PrimaryScreen')}
            
          />
           <Mybutton
            title="Lower Secondary"
            customClick={() => navigation.navigate('LowerSecondaryScreen')}
           
          />
           <Mybutton
            title="Upper Secondary"
            customClick={() => navigation.navigate('UpperSecondaryScreen')}
           
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;