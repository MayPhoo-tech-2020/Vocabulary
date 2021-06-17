import React from 'react';
import { StyleSheet, TextInput, View, Button, Alert, SafeAreaView } from 'react-native';
import Tts from 'react-native-tts';

export default function App() {
   [text, onChangeText] = React.useState("Enter you want to hear words");
  const speak = () =>{
    const txt = enterText;
    Tts.setDefaultRate(0.4);
    Tts.setDefaultPitch(1.5);
    Tts.speak(txt, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
    
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text, this.enterText=text}
      />
      <Button title="Press to hear some words" onPress={speak}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});