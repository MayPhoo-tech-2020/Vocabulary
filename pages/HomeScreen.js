// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect, useState,useRef,useLayoutEffect} from 'react';
import { FlatList, Button, DrawerLayoutAndroid, SafeAreaView,Pressable, StatusBar, StyleSheet, Text,Image, TouchableOpacity,View } from "react-native";
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

const DATA = [
  {
    id: "1",
    title: "Grade 1",
  },
  {
    id: "2",
    title: "Grade 2",
  },
  {
    id: "3",
    title: "Grade 3",
  },
  {
    id: "4",
    title: "Grade 4",
  },
  {
    id: "5",
    title: "Grade 5",
  },
  {
    id: "6",
    title: "Grade 6",
  },
  {
    id: "7",
    title: "Grade 7",
  },
  {
    id: "8",
    title: "Grade 8",
  },
  {
    id: "9",
    title: "Grade 9",
  },
  {
    id: "10",
    title: "Grade 10",
  },
  {
    id: "11",
    title: "Grade 11",
  },
];

const HomeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const drawer = useRef(null);
  const OnPressMenu = () =>{
    if(drawer.current==null){
      console.log("Drawer")
    }
      drawer.current.openDrawer(); 
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => OnPressMenu()}>
            <Image source={require('../assets/ic_menu_48.png')}>
            </Image>
        </TouchableOpacity>
        )       
    });
  }, [navigation]);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#87ceeb" : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={styles.centeredView}>
        <View style={styles.centeredView}>
           <TouchableOpacity 
               onPress={() => navigation.navigate('GradeUnits',{gradeId:item.id})} 
               style={[styles.modalView,backgroundColor]}>
                <Text style={[styles.title, textColor]}>{item.title}</Text>
          </TouchableOpacity>
        </View>
    </View>
);
const navigationView = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.drawerContainer}>
      <Image style={styles.drawerIcon} source={require('../assets/ic_about_40.png')}></Image>
      <Text style={styles.drawerText}>About</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.drawerContainer}>
      <Image style={styles.drawerIcon} source={require('../assets/ic_rating_40.png')}></Image>
      <Text style={styles.drawerText}>Rate us</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.drawerContainer}>
      <Image style={styles.drawerIcon} source={require('../assets/ic_mailbox_40.png')}></Image>
      <Text style={styles.drawerText}>Contact</Text>
    </TouchableOpacity>
    
  </View>
);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
       />
      </SafeAreaView>
    </DrawerLayoutAndroid>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer:{
    flex:0.1,
    marginTop:10,
    flexDirection: "row",
    alignItems:"center"
  },
  drawerText:{
    fontSize:20,
    marginHorizontal:20
  },
  drawerIcon:{
    marginHorizontal:10
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign:"center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width:"100%",
    height:"100%"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 70,
    alignItems: "center",
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  }
});

export default HomeScreen;