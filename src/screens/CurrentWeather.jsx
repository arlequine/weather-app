import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={styles.highLowWrapper}
          messagesOneStyles={styles.highLow}
          messagesTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={'its sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        containerStyles={styles.bodyWrapper}
        messagesOneStyles={styles.description}
        messagesTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
}

export default CurrentWeather


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

