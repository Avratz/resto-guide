import React from 'react'
import { StyleSheet, TextInput, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

interface SearchBarProps {
  search: string;
  handleSearch: (newKey: string) => void
  onSubmit: () => void
}

const SearchBar:React.FC<SearchBarProps> = ({search, handleSearch, onSubmit}) => {

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={26} color="black" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.textInput}
        value={search}
        onChangeText={handleSearch}
        onEndEditing={onSubmit}
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
    margin: 15,
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
