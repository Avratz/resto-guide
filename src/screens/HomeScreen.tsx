import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import HorizontalList from '../components/HorizontalList'
import SearchBar from '../components/SearchBar'
import useRestos from '../hooks/useRestos'


const HomeScreen = () => {
  const [search, setSearch] = React.useState<string>('')
  const [fetchRestos, restos, errorMessage] = useRestos()
  
  const filterRestosByPrice = (price: number) => {
    if(restos.length){
      return restos.filter((resto) => {if(resto?.price) return resto.price.length === price})
    }
    return []

  }

  return (
    <React.Fragment>
      <SearchBar 
        handleSearch={setSearch} 
        onSubmit={() => fetchRestos(search)}
        search={search}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <HorizontalList title="Cost Effective" restos={filterRestosByPrice(1)}/>
        <HorizontalList title="Bit Pricier" restos={filterRestosByPrice(2)}/>
        <HorizontalList title="Big Spender" restos={filterRestosByPrice(3)}/>
      </ScrollView>
    </React.Fragment>
  )
}

export default HomeScreen