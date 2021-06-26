// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the user*/

import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'vocabulary.db', createFromLocation : 1})

const ViewAllVoc = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM g7_voc',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
            console.log("Name is "+results.rows.length);
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.id}
        style={styles.container}>
      <View  style={styles.detailContainer}>
        <Text style={styles.txtVoc}>{item.voc_eng} ({item.voc_type})</Text>
        <Text style={styles.txtBold}> Meaning </Text>
        <Text style={styles.txtParagraph}>{item.voc_meaning}</Text>
         <Text style={styles.txtBold}> Translation </Text>
        <Text style={styles.txtParagraph}>{item.voc_mm}</Text>
         <Text style={styles.txtBold}> Example</Text>
        <Text style={styles.txtParagraph}>{item.voc_example}</Text>
      </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View style={styles.unitContainer}>
            <Text style={styles.txtTitle}> Unit 1</Text>
       </View>
       <View style={styles.wordCountContainer}>
       <Text>{flatListItems.length} words </Text>
       <View style={styles.progressBar}>
        
         <View style={{backgroundColor:"blue",width:'100%'}}></View>
      </View>
       <Text> {flatListItems.length}/{flatListItems.length}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
         
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center"
   },
   unitContainer: {
     flex: 0.05,
     padding: 10
   },
   wordCountContainer:{
     flex: 0.05,
     justifyContent: "center",
     alignItems: "center",
     flexDirection: 'row'
   },
   detailContainer:{
     flex: 0.6,
     backgroundColor:"skyblue",
     borderWidth: 1,
     borderRadius: 30,
     padding:20,
   },
   btnContainer:{
   flex:0.2,
   flexDirection: 'row',
   justifyContent: "center",
   alignItems: "center",
   
   
   },
   tinyLogo: {
      width: 50,
      height: 50,
      marginHorizontal: 20
    },
   txtTitle:{
     textAlign: "center",
     fontSize: 20
   },
   txtSubTitle:{
     fontSize: 16
   },
   txtParagraph:{
    fontSize: 14
   },
   txtVoc:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
    
   },
   txtBold:{
    fontSize: 14,
    fontWeight: "bold",
    marginVertical:5
   },
   progressBar: {
      flexDirection: 'row',
      height: 10,
      width: '50%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5
    }
  });
export default ViewAllVoc;