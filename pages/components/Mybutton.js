// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <View style={styles.centeredView}>
        <View style={styles.centeredView}>
            <TouchableOpacity
            onPress={props.customClick}
            disabled={props.customDisable}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}> {props.title} </Text>                            
              </View>
            </TouchableOpacity>
              
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 65,
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
    textAlign: "center",
    fontSize: 20
  }
});


export default Mybutton;