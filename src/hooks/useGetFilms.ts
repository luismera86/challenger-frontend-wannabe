import { useEffect, useState } from 'react'

import axios from 'axios'

export const useGetFilms = () => {

  const [characterFilms, setCharacterFilms] = useState<string>('')
  const [listTitles, setListTitles] = useState<string[]>([])

  useEffect(() => {
    setListTitles([...listTitles, characterFilms])
  }, [characterFilms])

  const requestFilms = async (films: string[]) => {
    try {
      films.forEach(async (f) => {
        const resp = await axios.get(f)
        const data = await resp.data
        setCharacterFilms(data.title)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    characterFilms,
      requestFilms,
      listTitles
  }
}
