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
          <Mytext text="Primary" />
          <Mybutton
            title="Grade 1"
            customClick={() => navigation.navigate('Category',{gradeId:1})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 2"
            customClick={() => navigation.navigate('Category',{gradeId:2})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 3"
            customClick={() => navigation.navigate('Category',{gradeId:3})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 4"
            customClick={() => navigation.navigate('Category',{gradeId:4})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 5"
            customClick={() => navigation.navigate('Category',{gradeId:5})}
            customDisable={true}
          />
           <Mybutton
            title="Grade 6"
            customClick={() => navigation.navigate('Category',{gradeId:6})}
            customDisable={true}
          />
          <Mytext text="Lower Secondary" />
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
           <Mytext text="Upper Secondary" />
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

export default HomeScreen;