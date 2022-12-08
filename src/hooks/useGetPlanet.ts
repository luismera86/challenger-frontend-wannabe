import axios from 'axios'
import { useState } from 'react'

export const useGetPlanet = () => {
  const [planet, setPlanet] = useState('')

  const requestPlanet = async (url: string) => {
    try {
      const resp = await axios.get(url)
      const data = await resp.data
      setPlanet(data.name)
      console.log(url)
      console.log(data.name)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    planet,
    requestPlanet,
  }
}
