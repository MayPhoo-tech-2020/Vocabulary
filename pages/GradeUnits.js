import React, { useState,useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'vocabulary.db', createFromLocation:1})
const GradeUnits = ({ navigation, route }) => {
  const {gradeId}  = route.params;
  const [selectedId, setSelectedId] = useState(null);
  let [flatListItems, setFlatListItems] = useState([]);
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM grade_unit_list where grade = ?',
            [gradeId],
            (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                setFlatListItems(temp);
                console.log(flatListItems[0]);
              }
            
          );
        });
    }, []);
  let Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.unit_title}</Text>
      </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#87ceeb" : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Category',{unitId:item.unit,
          title:item.title})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flatListItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 0.5,
  },
  title: {
    fontSize: 20,
    textAlign:"center"
  },
});

export default GradeUnits;