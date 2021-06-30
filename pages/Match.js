import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Match = ({route}) => {
  const {unitId} = route.params;
  const {vocabularyData} = route.params;
  return (
    <Text style={styles.baseText}>
      {vocabularyData[0].voc_mm}
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default Match;