import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  }
})
