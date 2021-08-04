// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Button

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <View style={styles.centeredView}>
            <TouchableOpacity
            onPress={props.customClick}
            disabled={props.customDisable}
            style={styles.modalView}
            >
                <Text style={styles.modalText}> {props.title} </Text>                            
            </TouchableOpacity>
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
    flex: 0.55,
    backgroundColor: "white",
    width:"55%",
    height:"50%",
    borderRadius: 20,
    padding: 65,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    fontSize: 20
  }
});


export default Mybutton;