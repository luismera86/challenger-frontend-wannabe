import { People } from '../../../models'
import PeopleContext from './PeoplesContext'
import { useState } from 'react'

interface PeopleProviderProps {
  children: JSX.Element
}

const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [people, setPeople] = useState<People>({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: '',
  })

  return <PeopleContext.Provider value={{ people, setPeople }}>{children}</PeopleContext.Provider>
}
export default PeopleProvider
