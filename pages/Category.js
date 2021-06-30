// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'vocabulary.db'})
const Category = ({ navigation, route }) => {
    const {unitId}  = route.params;
    let [vocabularyData, setVocabularyData] = useState([]);
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM g7_voc where unit = ?',
            [unitId],
            (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                setVocabularyData(temp);
              }
            
          );
        });
    }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="Learn"
            customClick={() => navigation.navigate('Learn',{unitId, vocabularyData})}
          />
           <Mybutton
            title="Test"
            customClick={() => navigation.navigate('Test')}
          />
           <Mybutton
            title="View All Vocabulary"
            customClick={() => navigation.navigate('ViewAll')}
          />          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;