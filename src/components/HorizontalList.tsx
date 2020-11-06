import React from 'react'
import { NavigationContext } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import SingleResto from './SingleResto'
import { IResto } from '../types/RestoTypes'
 

const HorizontalList:React.FC<{title:string; restos: [] | IResto[]}> = ({title, restos}) => {
  const navigation = React.useContext(NavigationContext)
  if(!restos.length) return null
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={restos}
        keyExtractor={(resto) => resto.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation?.navigate('Single', {id: item.id})}>
            <SingleResto resto={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default HorizontalList

const styles = StyleSheet.create({
  container:{
    marginBottom: 15
  },
  title:{
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold', 
  }
})
