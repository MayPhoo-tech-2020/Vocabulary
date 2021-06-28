import React, {useState} from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Learn = ({route}) => {
    const {unitId} = route.params;
    const {vocabularyData} = route.params;
    let [clickCount, setClickCount]=useState(1);
    let [progress, setProgress]=useState("2%");
    let [progressClickCount, setProgressClickCount]=useState(1);
    let progressCount = 0;
    const onPressNext = () =>{ 
        setClickCount(clickCount<50?clickCount => clickCount = clickCount + 1:clickCount);
        if((progressCount<=clickCount*2)
        && progressClickCount<50){
        progressCount = progressClickCount + 1;
        progressCount = progressCount *2;
        setProgressClickCount(progressClickCount => progressClickCount = progressCount/2);
        var strProgress = (progressCount)+"%";
        setProgress(progress=>strProgress);
        }
        
    }
    const OnPressPrevious = () =>{
      setClickCount(clickCount>1?clickCount => clickCount = clickCount - 1:clickCount);
    }
    
    return(        
        <View style={styles.container}>
        <View style={styles.unitContainer}>
          <Text style={styles.txtTitle}> Unit {unitId}</Text>
        </View>
        <View style={styles.wordCountContainer}>
         <Text>{vocabularyData.length} words </Text>
         <View style={styles.progressBar}>     
           <View style={{backgroundColor:"yellow",width:progress,borderRadius: 5}}></View>
        </View>
         <Text> {progressClickCount}/{vocabularyData.length}</Text>
        </View>
        <View  style={styles.detailContainer}>
        <View style={styles.speakerContainer}>
         <Text style={styles.txtVoc}>{vocabularyData[clickCount-1].voc_eng}({vocabularyData[clickCount-1].voc_type})</Text>
         <TouchableHighlight style={styles.speakerLogo}>
               <Image style={styles.speakerLogo}source={require('@icons/ic_speaker.png')}></Image>
         </TouchableHighlight>
        </View> 
        <Text style={styles.txtBold}> Meaning </Text>
        <View style={styles.ttsSpeakerContainer}>
          <Text style={styles.txtParagraph}>{vocabularyData[clickCount-1].voc_meaning}</Text>
          <TouchableHighlight style={styles.tinnyLogo}>
               <Image style={styles.tinnyLogo}source={require('@icons/ic_speaker_1.png')}></Image>
         </TouchableHighlight>
        </View>          
        <Text style={styles.txtBold}> Translation </Text>
        <Text style={styles.txtParagraph}>{vocabularyData[clickCount-1].voc_mm}</Text>
        <Text style={styles.txtBold}> Example</Text>          
        <View style={styles.ttsSpeakerContainer}>
          <Text style={styles.txtParagraph}>{vocabularyData[clickCount-1].voc_example}</Text> 
          <TouchableHighlight style={styles.tinnyLogo}>
               <Image style={styles.tinnyLogo}source={require('@icons/ic_speaker_1.png')}></Image>
          </TouchableHighlight>
        </View>                
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity
        style={styles.btnLogo}  onPress={OnPressPrevious}>
       
        <Image
        style={styles.btnLogo}   
        source={require('@icons/ic_backward.png')}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnLogo} onPress={onPressNext}>
         
        <Image
        style={styles.btnLogo}     
        source={require('@icons/ic_forward.png')}
        ></Image>
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
     },
     detailContainer:{
      flex: 0.5,
      backgroundColor:"#f0f8ff",
      borderWidth: 1,
      borderRadius: 30,
      padding: 10
    },
     unitContainer: {
       flex: 0.05
     },
     wordCountContainer:{
       flex: 0.2,
       justifyContent: "center",
       alignItems: "center",
       flexDirection: 'row'
     },
     speakerContainer:{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
      },
      ttsSpeakerContainer:{
        flex: 0.2,
        flexDirection: 'row'
      },
     
     btnContainer:{
     flex:0.15,
     flexDirection: 'row',
     justifyContent: "center",
     alignItems: "center",
     
     
     },
     btnLogo: {
        width: 70,
        height: 70,
        marginHorizontal: 30
      },
      speakerLogo: {
        width: 50,
        height: 50,
        marginHorizontal:5
      },
      tinnyLogo: {
        width: 30,
        height: 30,
      },
     txtTitle:{
       textAlign: "center",
       fontSize: 20
     },
     txtSubTitle:{
       fontSize: 16
     },
     txtParagraph:{
      fontSize: 14
     },
     txtVoc:{
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center"
      
     },
     txtBold:{
      fontSize: 14,
      fontWeight: "bold",
      marginVertical:10
     },
     progressBar: {
        flexDirection: 'row',
        height: 10,
        width: '50%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      }
    });
export default Learn;