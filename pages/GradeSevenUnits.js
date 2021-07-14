import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Unit 1",
  },
  {
    id: "2",
    title: "Unit 2",
  },
  {
    id: "3",
    title: "Unit 3",
  },
  {
    id: "13",
    title: "Poem 1: The Lazy Boy",
  },
  {
    id: "4",
    title: "Unit 4",
  },
  {
    id: "5",
    title: "Unit 5",
  },
  {
    id: "6",
    title: "Unit 6",
  },
  {
    id: "14",
    title: "Poem 2: The Greedy Dog",
  },
  {
    id: "7",
    title: "Unit 7",
  },
  {
    id: "8",
    title: "Unit 8",
  },
  {
    id: "9",
    title: "Unit 9",
  },
  {
    id: "15",
    title: "Poem 3: The Sun",
  },
  {
    id: "10",
    title: "Unit 10",
  },
  {
    id: "11",
    title: "Unit 11",
  },
  {
    id: "12",
    title: "Unit 12",
  },
  {
    id: "16",
    title: "Poem 4 : Teachers Three",
  }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const GradeSevenUnits = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#87ceeb" : "#f0f8ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Category',{unitId:item.id,
          title:item.title})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

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

export default GradeSevenUnits;