import { People } from '../../../models'
import PeopleContext from './PeoplesContext'
import { useAxios } from '../../../hooks'
import { useState } from 'react'

interface PeopleProviderProps {
  children: JSX.Element
}

interface ApiRespPeople {
  count: number
  next: string,
  previous: string
  results: People[] 
}

const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [url, setUrl] = useState('https://swapi.dev/api/people')
  const [loading, data, error, request] = useAxios<ApiRespPeople>({ method: 'GET', url });
    
 

  return <PeopleContext.Provider value={{ setUrl, loading, data, error, request }}>{children}</PeopleContext.Provider>
}
export default PeopleProvider
