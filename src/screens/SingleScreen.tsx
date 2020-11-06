import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Yelp from '../api/yelp'
import SingleResto from '../components/SingleResto'

const SingleScreen:React.FC<{route: any}> = ({route}) => {
  const [restoState, setResto] = React.useState({})
  const id = route.params.id

  React.useEffect(() => {
    const fetchResto = async () => {
      try{
        const response = await Yelp.get(`/${id}`)
        setResto(response.data)
      } catch(err){
        console.log(err)
      }

    }
    fetchResto()
  },[])

  if(!Object.keys(restoState).length) return null
  return (
    <ScrollView style={styles.container}>
      <SingleResto resto={restoState} />
    </ScrollView>
  )
}
 
export default SingleScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    margin: 15
  },
})
