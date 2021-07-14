// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const UpperSecondaryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
           <Mybutton
            title="Grade 10"
            customClick={() => navigation.navigate('Category',{gradeId:10})}
            customDisable={true}
          />
          <Mybutton
            title="Grade 11"
            customClick={() => navigation.navigate('Category',{gradeId:11})}
            customDisable={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpperSecondaryScreen;