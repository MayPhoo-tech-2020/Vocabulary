import React, {useState} from 'react';
import { Text, StyleSheet,View,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Match = ({route}) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [openFifth, setOpenFifth] = useState(false);
  const [value, setValue] = useState(null); 
  const [chooseWord, setChooseWord] = useState(getChooseWord);
  const [items, setItems] = useState(getDropDownWord(chooseWord));
  /*const onPress = (data) => {
    alert("length is "+data.length); 
        
  };
  */
 function onPressSubmit(){
  setChooseWord(getChooseWord);
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
    console.log(result);
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
    return temp;
  }

  function getDropDownWord(item){
    var temp = [];
    for(var i=0; i<5; i++){
      var element = {};
      element.label = item[i].voc_meaning;
      element.value =  item[i].voc_eng;
      temp.push(element);
      console.log(temp[i].value);
    }
    temp = randomUniqueNum(5,5,temp);
    console.log(temp)
    return temp;

  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
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
           value={value}
           items={items}
           setOpen={setOpenFirst}
           setValue={setValue}
           setItems={setItems}
          zIndex={50}
         />
         <DropDownPicker
        open={openSecond}
        value={value}
         items={items}
         style={styles.dropDownContainer}
         setOpen={setOpenSecond}
         setValue={setValue}
         setItems={setItems}
        zIndex={40}
        />
       <DropDownPicker
         open={openThird}
        value={value}
        items={items}
        setOpen={setOpenThird}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={30}
      />
       <DropDownPicker
         open={openFourth}
        value={value}
        items={items}
        setOpen={setOpenFourth}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={20}
      />
       <DropDownPicker
         open={openFifth}
        value={value}
        items={items}
        setOpen={setOpenFifth}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={10}
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
    backgroundColor:"blue",
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