import React from "react";
import { View, StyleSheet,SafeAreaView} from "react-native";
import Mybutton from './components/Mybutton';

const Test = ({ navigation,route }) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mybutton
            title="Choose"
            customClick={() => navigation.navigate('Choose',{unitId, vocabularyData})}
          />
           <Mybutton
            title="Match"
            customClick={() => navigation.navigate('Match',{unitId, vocabularyData})}
          />
        </View>
      </View>
    </SafeAreaView>
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