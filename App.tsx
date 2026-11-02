import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  // määritellään tila ikää varten
  const [age, setAge] = useState<string>('')
  const numericAge = parseInt(age)
  const isValidAge = !isNaN(numericAge) && numericAge > 0

  //lasketaan syke raja iänmukaan tai näytetään 0 jos ikä ei ole kelvollinen
  const lowerLimit = isValidAge ? (220 - numericAge) * 0.65 : 0
  const upperLimit = isValidAge ? (220 - numericAge) * 0.85 : 0

  // määritellään komponentin renderöinti
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Calculator</Text>

      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.reslt}>
        lower Limit: {lowerLimit.toFixed(2)} bpm
      </Text>
      <Text style={styles.reslt}>
        upper Limit: {upperLimit.toFixed(2)} bpm
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
// määritellään tyylit
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: '#4a4a4a',
    color: 'white',
    marginBottom: 20,
    width: '30%',
  },
  reslt: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
});
