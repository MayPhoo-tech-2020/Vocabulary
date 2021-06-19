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
          <Mytext text="Vocabulary Sample" />
          <Mybutton
            title="View All Vocabulary"
            customClick={() => navigation.navigate('ViewAll')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;