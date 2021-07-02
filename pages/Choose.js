import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Choose = ({route}) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  const [word, setWord] = useState(getRandomInt(vocabularyData.length));
  const [chooseWord, setChooseWord] = useState(getChooseWord);
  const [clickedWord, setClickedWord] = useState();
  /*const onPress = (data) => {
    alert("length is "+data.length); 
        
  };
  */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomUniqueNum(range, outputCount, tempWordList) {

    let arr = []
    for (let i = 0; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
    let resultTempWordList = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
    console.log(result);
    result.forEach(element => {
      resultTempWordList.push(tempWordList[element]);
    });
   
    return resultTempWordList;
  }
  function getChooseWord() {   
    var temp = [];
    for(var i=1; i<3; i++){
      temp.push(vocabularyData[getRandomInt(vocabularyData.length)]);
    }
    var answerIndex = getRandomInt(vocabularyData.length);
    temp.push(vocabularyData[answerIndex]);
    setWord(answerIndex);
    temp = randomUniqueNum(3,3,temp);
    return temp;
  }
  return (
    <View style={styles.container}>
    <Text style={styles.txtSubTitle}>Choose correct word</Text>
      <View style={styles.questionContainer}>
        <Text>{vocabularyData[word].voc_meaning}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[0].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate");
              setChooseWord(getChooseWord);

            }
          }}
        >
          <Text>{chooseWord[0].voc_eng}</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[1].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate");
              setChooseWord(getChooseWord);

            }
          }}
      >
        <Text>{chooseWord[1].voc_eng}</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[2].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate");
              setChooseWord(getChooseWord);

            }
          }}
        >
        <Text>{chooseWord[2].voc_eng}</Text>
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

export default Choose;