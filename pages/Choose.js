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
    <Text>Please choose correct word</Text>
      <View style={styles.countContainer}>
        <Text>Inded ix {word}</Text>
        <Text>{vocabularyData[word].voc_eng}</Text>
        <Text>Choose word list is {chooseWord[0].voc_eng}</Text>
        <Text>Choose word list is {chooseWord[1].voc_eng}</Text>
        <Text>Choose word list is {chooseWord[2].voc_eng}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[0].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate")

            }
          }}
        >
          <Text>{chooseWord[0].voc_eng}</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[1].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate")

            }
          }}
      >
        <Text>{chooseWord[1].voc_eng}</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(chooseWord[2].voc_eng == vocabularyData[word].voc_eng){
              Alert.alert("Congrate")

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
    paddingHorizontal: 20
  },
  btnContainer:{
  flex: 0.5,
  justifyContent: "center",
  alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width:"50%",
    height:"50%",
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10
  },
  countContainer: {
    flex:0.3,
    padding: 10
  }
});

export default Choose;