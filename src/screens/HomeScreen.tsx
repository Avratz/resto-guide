import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestos from '../hooks/useRestos'

const HomeScreen = () => {
  const [search, setSearch] = React.useState<string>('')
  const [fetchRestos, restos, errorMessage] = useRestos()
  

  return (
    <View style={styles.container}>
      <SearchBar 
        handleSearch={setSearch} 
        onSubmit={() => fetchRestos(search)}
        search={search}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Restos: {restos.length}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  }
})
