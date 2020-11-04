import React from 'react'
import { StyleSheet, TextInput, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={26} color="black" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 18,
    flex: 1
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 15
  }
})
