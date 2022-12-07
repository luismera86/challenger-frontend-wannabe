import { getCharacterData } from "@/redux/features/slices/characters/charactersDetailsSlice"
import { useAppDispatch } from "@/redux"

export const setterDetails = (url: string) => { 
    const dispatch = useAppDispatch()
    if (url.search('people') !== -1) {
        dispatch(getCharacterData(url))
      } else if (url.search('films') !== -1) {
        
      } else if (url.search('plantes') !== -1) {
  
      } else if (url.search('species') !== -1) {
  
      } else if (url.search('vehicle') !== -1) {
  
      } else if (url.search('starship') !== -1) {
        
      }
  }