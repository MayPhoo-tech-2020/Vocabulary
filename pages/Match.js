import React, {useState} from 'react';
import { Text, StyleSheet,View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Match = ({route}) => {
  const [open, setOpen] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      </View>
      <View style = {styles.detailcontainer}>
        <View style={styles.separatorTextContainer}>
            <View style={styles.textContainerWithoutMarginTop}>
              <Text>Hello World</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Hello World</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Hello World</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Hello World</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Hello World</Text>
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
          open={open}
           value={value}
         items={items}
         style={styles.dropDownContainer}
         setOpen={setOpen}
         setValue={setValue}
         setItems={setItems}
        zIndex={40}
        />
       <DropDownPicker
         open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={30}
      />
       <DropDownPicker
         open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={20}
      />
       <DropDownPicker
         open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        style={styles.dropDownContainer}
         setValue={setValue}
         setItems={setItems}
        zIndex={10}
      />
    </View>
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
     flex: 0.4,
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
    height:"16%",
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
    height:"16%",
    marginTop:12,
    marginHorizontal:10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 5,
   
  }
});

export default Match;