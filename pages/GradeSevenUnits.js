// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';

const GradeSevenUnits = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="Unit 1"
            customClick={() => navigation.navigate('Category',{unitId:1,
            title:"Unit 1"})}
          />
           <Mybutton
            title="Unit 2"
            customClick={() => navigation.navigate('Category',{unitId:2,
            title:"Unit 2"})}
          />
           <Mybutton
            title="Unit 3"
            customClick={() => navigation.navigate('Category',{unitId:3,
            title:"Unit 3"})}
          />
           <Mybutton
            title="Poem 1: The Lazy Boy"
            customClick={() => navigation.navigate('Category',{unitId:13, 
                title:"Poem 1: The Lazy Boy"})}
          />
           <Mybutton
            title="Unit 4"
            customClick={() => navigation.navigate('Category',{unitId:4,
            title:"Unit 4"})}
          />
           <Mybutton
            title="Unit 5"
            customClick={() => navigation.navigate('Category',{unitId:5,
            title:"Unit 5"})}
          />
           <Mybutton
            title="Unit 6"
            customClick={() => navigation.navigate('Category',{unitId:6,
            title:"Unit 6"})}
          />
          <Mybutton
            title="Poem 2: The Greedy Dog"
            customClick={() => navigation.navigate('Category',{unitId:14,
            title:"Poem 2: The Greedy Dog"})}
          />
           <Mybutton
            title="Unit 7"
            customClick={() => navigation.navigate('Category',{unitId:7,
            title:"Unit 7"})}
          />
           <Mybutton
            title="Unit 8"
            customClick={() => navigation.navigate('Category',{unitId:8,
            title:"Unit 8"})}
          />
           <Mybutton
            title="Grade 9"
            customClick={() => navigation.navigate('Category',{unitId:9,
            title:"Unit 9"})}
          />
            <Mybutton
            title="Poem 3: The Sun"
            customClick={() => navigation.navigate('Category',{unitId:15,
            title:"Poem 3: The Sun"})}
          />
           <Mybutton
            title="Unit 10"
            customClick={() => navigation.navigate('Category',{unitId:10,
            title:"Unit 10"})}
          />
          <Mybutton
            title="Unit 11"
            customClick={() => navigation.navigate('Category',{unitId:11,
            title:"Unit 11"})}
          />
           <Mybutton
            title="Unit 12"
            customClick={() => navigation.navigate('Category',{unitId:12,
            title:"Unit 12"})}
          />
          <Mybutton
            title="Poem 4: Teachers Three"
            customClick={() => navigation.navigate('Category',{unitId:16,
            title:"Poem 4 : Teachers Three"})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GradeSevenUnits;