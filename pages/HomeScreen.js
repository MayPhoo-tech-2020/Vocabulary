// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const DATA = [
  {
    id: "1",
    title: "Grade 1",
  },
  {
    id: "2",
    title: "Grade 2",
  },
  {
    id: "3",
    title: "Grade 3",
  },
  {
    id: "4",
    title: "Grade 4",
  },
  {
    id: "5",
    title: "Grade 5",
  },
  {
    id: "6",
    title: "Grade 6",
  },
  {
    id: "7",
    title: "Grade 7",
  },
  {
    id: "8",
    title: "Grade 8",
  },
  {
    id: "9",
    title: "Grade 9",
  },
  {
    id: "10",
    title: "Grade 10",
  },
  {
    id: "11",
    title: "Grade 11",
  },
];

const HomeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#87ceeb" : "#f0f8ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={styles.centeredView}>
        <View style={styles.centeredView}>
           <TouchableOpacity 
               onPress={() => navigation.navigate('GradeSevenUnits',{gradeId:item.id})} 
               style={[styles.item,backgroundColor]}>
              <View style={styles.modalView}>
                <Text style={[styles.title, textColor]}>{item.title}</Text>
              </View>  
          </TouchableOpacity>
        </View>
    </View>
);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign:"center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width:"100%",
    height:"100%"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 70,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  }
});

export default HomeScreen;