import React, {useState,useEffect} from 'react';
import { Text, StyleSheet,View,TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native-reanimated';

const Match = ({route}) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [openFifth, setOpenFifth] = useState(false);
  const [valueFirst, setValueFirst] = useState(null); 
  const [valueSecond, setValueSecond] = useState(null);
  const [valueThird, setValueThird] = useState(null); 
  const [valueFourth, setValueFourth] = useState(null);
  const [valueFifth, setValueFifth] = useState(null); 
  let [chooseWord, setChooseWord] = useState(getChooseWord);
  let [items, setItems] = useState(getDropDownWord);
  /*const onPress = (data) => {
    alert("length is "+data.length); 
        
  };
  */
  useEffect(() => {
    console.log("It is in use effect");
    console.log(chooseWord);
    console.log("afer log");
  });
 function Clear(){
  setOpenFirst(false);
  setOpenSecond(false);
  setOpenThird(false);
  setOpenFourth(false);
  setOpenFifth(false);
  setValueFirst(null); 
  setValueSecond(null);
  setValueThird(null); 
  setValueFourth(null);
  setValueFifth(null); 
  }
 function onPressSubmit(){
 if(valueFirst==chooseWord[0].voc_eng &&
  valueSecond==chooseWord[1].voc_eng &&
  valueThird==chooseWord[2].voc_eng &&
  valueFourth==chooseWord[3].voc_eng&&
  valueFifth==chooseWord[4].voc_eng){
   Alert.alert("Congrate");
   Clear();  
   setChooseWord(getChooseWord);
   setItems(getDropDownWord);
 }
 else{
   Alert.alert("Try Again");
 }
 }
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
    result.forEach(element => {
      resultTempWordList.push(tempWordList[element]);
    });
   
    return resultTempWordList;
  }
  function getChooseWord() {   
    
    var temp = [];
    for(var i=0; i<5; i++){
      temp.push(vocabularyData[getRandomInt(vocabularyData.length)]);
    }
    temp = randomUniqueNum(5,5,temp);
    chooseWord = temp;
    console.log("It is n get choose wrod");
    return temp;
  }

  function getDropDownWord(){
    var temp = [];
    var item = chooseWord;
    for(var i=0; i<5; i++){
      var element = {};
      element.label = item[i].voc_meaning;
      element.value =  item[i].voc_eng;
      temp.push(element);
      console.log(temp[i].value);
    }
    temp = randomUniqueNum(5,5,temp);
    console.log("It is in getDropDownWord");
    console.log(temp)
    return temp;

  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={{
        fontSize:20,
        textAlign:'center'
      }}>Unit{unitId}</Text>
        <Text style={{
          fontSize:16,
          marginTop:15
        }}>
          Match vocabulary with its meaning.
        </Text>
      </View>
      <View style = {styles.detailcontainer}>
        <View style={styles.separatorTextContainer}>
            <View style={styles.textContainerWithoutMarginTop}>
              
              <Text>{chooseWord[0].voc_eng}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{chooseWord[1].voc_eng}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{chooseWord[2].voc_eng}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{chooseWord[3].voc_eng}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{chooseWord[4].voc_eng}</Text>
            </View>
        </View>
        <View style={styles.separatorContainer}>
            <DropDownPicker
            open={openFirst}
           value={valueFirst}
           items={items}
           setOpen={setOpenFirst}
           setValue={setValueFirst}
           setItems={setItems}
          zIndex={50}
          correctWord = {valueFirst===chooseWord[0].voc_eng?true:false}
          itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "grey"
          }}
         />
         <DropDownPicker
        open={openSecond}
        value={valueSecond}
         items={items}
         style={styles.dropDownContainer}
         setOpen={setOpenSecond}
         setValue={setValueSecond}
         setItems={setItems}
        zIndex={40}
        itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "grey"
          }}
        />
       <DropDownPicker
         open={openThird}
        value={valueThird}
        items={items}
        setOpen={setOpenThird}
        style={styles.dropDownContainer}
         setValue={setValueThird}
         setItems={setItems}
        zIndex={30}
        itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "grey"
          }}
      />
       <DropDownPicker
         open={openFourth}
        value={valueFourth}
        items={items}
        setOpen={setOpenFourth}
        style={styles.dropDownContainer}
        setValue={setValueFourth}
        setItems={setItems}
        zIndex={20}
        itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "grey"
          }}
      />
       <DropDownPicker
         open={openFifth}
        value={valueFifth}
        items={items}
        setOpen={setOpenFifth}
        style={styles.dropDownContainer}
         setValue={setValueFifth}
         setItems={setItems}
        zIndex={10}
        itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "grey"
          }}
      />
    </View>
   </View>
   <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
    </View>
      
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection:'column'
   },
   titleContainer:{
    flex: 0.05,
    flexDirection:'column',
   },
   detailcontainer:{
     flex: 0.6,
     width:"100%",
     flexDirection:'row',    
   },
   styleDetailContainer:{
    flex: 0.5,
    flexDirection:'column',
    backgroundColor:"yellow"

   },
  dropDownContainer:{
    marginTop:10,
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
    textAlign:"center"
  },
   separatorTextContainer:{
    width:"40%",
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5
    
  },
  separatorContainer:{
    marginTop:10,
    width:"56%",
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5
  },
  textContainer:{
    width:"100%",
    height:"10.8%",
    marginTop:11,
    marginHorizontal:10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 5,
    
  },
  textContainerWithoutMarginTop:{
    width:"100%",
    height:"10.8%",
    marginTop:12,
    marginHorizontal:10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 5,
   
  },
  btnContainer:{
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f8ff",
      width:"40%",
      height:"30%",
      flexDirection: 'row',
      marginVertical: 10,
      borderRadius:30,
      borderWidth:1,
      padding: 10
    },
});

export default Match;