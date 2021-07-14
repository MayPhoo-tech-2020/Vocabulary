// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const LowerSecondaryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="Grade 7"
            customClick={() => navigation.navigate('GradeSevenUnits')}
            customDisable={false}
          />
           <Mybutton
            title="Grade 8"
            customClick={() => navigation.navigate('Category',{gradeId:8})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 9"
            customClick={() => navigation.navigate('Category',{gradeId:9})}
            customDisable={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LowerSecondaryScreen;