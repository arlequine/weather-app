import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const RowText = ({ messageOne, messageTwo, containerStyles, messagesOneStyles, messagesTwoStyles }) => {
  return (
    <View style={containerStyles}>
      <Text style={messagesOneStyles}>{messageOne}</Text>
      <Text style={messagesTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText