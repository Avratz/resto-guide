import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SingleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Single</Text>
    </View>
  )
}

export default SingleScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  }
})
