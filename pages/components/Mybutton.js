// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
            onPress={props.customClick}
            disabled={props.customDisable}
            >
              <View style={styles.centeredView}>
                  <Text style={styles.modalText}> {props.title} </Text>               
              </View>
              
            </TouchableOpacity>
              
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    height:"100%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width:"50%",
    height:"70%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    textAlign: "center",
    fontSize: 20
  }
});


export default Mybutton;