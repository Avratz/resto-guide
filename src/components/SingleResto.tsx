import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IResto } from '../types/RestoTypes'

const SingleResto:React.FC<{resto: IResto}> = ({resto}) => {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: resto.image_url }}/>
      <Text style={styles.name}>{resto.name}</Text>
      <Text style={styles.subtitle}>{resto.rating} Stars, {resto.review_count} Reviews</Text>
    </View>
  )
}

export default SingleResto

const styles = StyleSheet.create({
  container:{
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 15
  },
  subtitle:{
    color: "#555555"
  },
  name: {
    fontWeight: 'bold',
  }

})
