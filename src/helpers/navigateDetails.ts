import { useNavigate } from 'react-router-dom'

export const navigateDetails = (url: string) => {
  const navigate = useNavigate()

  if (url.search('people') !== -1) {
    navigate('/charactersdetails')
  } else if (url.search('films') !== -1) {
  } else if (url.search('plantes') !== -1) {
  } else if (url.search('species') !== -1) {
  } else if (url.search('vehicle') !== -1) {
  } else if (url.search('starship') !== -1) {
  }
}
