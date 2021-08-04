import React, { useState, useRef } from "react";
import { View,StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';


const Match = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

return <Picker
  ref={pickerRef}
  selectedValue={selectedLanguage}
  mode={"dropdown"}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

}
export default Match;