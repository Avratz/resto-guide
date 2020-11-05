import {useEffect, useState} from 'react'
import Yelp from '../api/yelp'

type fetchRestos = (term: string) => Promise<void>

const useRestos = (): [
  fetchRestos: fetchRestos,
  restos: [],
  errorMessage: string,
] => {

const [restos, setRestos] = useState<[]>([])
const [errorMessage, setErrorMessage] = useState<string>('')

const fetchRestos = async (term: string): Promise<void> => {
  try{
    const response = await Yelp.get('/search', { params: {
        limit: 50,
        term,
        location: 'new york'
      }
    })
    setRestos(response.data.businesses)
  } catch(err) {
    setErrorMessage('Something went wrong.')
  }
}

useEffect(() => {
  fetchRestos('pasta')
},[])


return [fetchRestos, restos, errorMessage]
}

export default useRestos