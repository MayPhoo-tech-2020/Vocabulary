import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";

const Test = ({ navigation,route }) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  return (
    <View
      style={styles.container}
    >
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Choose',{unitId, vocabularyData})}
        >
          <Text>Choose</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Match',{unitId, vocabularyData})}>
        <Text>Match</Text>
        </TouchableOpacity>
         
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionContainer: {
    flex:0.1,
    borderWidth: 1,
    borderRadius: 30,
    marginVertical:10,
    backgroundColor: "#f0f8ff",
    justifyContent: 'center',
    padding: 10
  },
  btnContainer:{
  flex: 0.8,
  justifyContent: "center",
  alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    width:"60%",
    height:"30%",
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10
  },
  txtSubTitle:{
    fontSize: 16
  },
});

export default Test;