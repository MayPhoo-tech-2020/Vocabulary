import React from "react";
import { View, Text, Button } from "react-native";

const Test = ({ navigation,route }) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Button
          title="Choose"
          onPress={() => navigation.navigate('Choose',{unitId, vocabularyData})}
        />
        <Button
          title="Match"
          onPress={() => navigation.navigate('Match',{unitId, vocabularyData})}
        />
    </View>
  );
};

export default Test;