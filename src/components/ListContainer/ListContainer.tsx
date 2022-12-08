import { Button, Col, Container, Row } from 'react-bootstrap'

import { getCharacterDetails } from '@/redux/features/slices/characters/charactersDetailsSlice'
import { getFilmsDetails } from '@/redux/features/slices/films/filmsDetailsSlice'
import { getPlanetDetails } from '@/redux/features/slices/planets/planetsDetailsSlice'
import { getSpecieDetails } from '@/redux/features/slices/species/speciesDetailsSlice'
import { getStarShipDetails } from '@/redux/features/slices/starShips/starShipsDetailsSlice'
import { getVehicleDetails } from '@/redux/features/slices/vehicles/vehiclesDetailsSlice'
import { useAppDispatch } from '@/redux'
import { useNavigate } from 'react-router-dom'

interface Props {
  results: any[]
}
const ListContainer = ({ results }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onHandleClick = (url: any) => {
    if (url.search('people') !== -1) {
      dispatch(getCharacterDetails(url))
      navigate('/characterdetails')
    } else if (url.search('films') !== -1) {
      dispatch(getFilmsDetails(url))
      navigate('/filmdetails')
    } else if (url.search('planets') !== -1) {
      dispatch(getPlanetDetails(url))
      navigate('/planetdetails')
    } else if (url.search('species') !== -1) {
      dispatch(getSpecieDetails(url))
      navigate('/speciedetails')
    } else if (url.search('vehicle') !== -1) {
      dispatch(getVehicleDetails(url))
      navigate('/vehicledetails')
    } else if (url.search('starship') !== -1) {
      dispatch(getStarShipDetails(url))
      navigate('/starshipdetails')
    }
  }

  return (
    <Container className='text-white-50 fs-5'>
      {results?.map((data) => (
        <Row className='mt-3' key={data.name || data.title}>
          <Col xs={3}>{data.name || data.title} </Col>
          <Col>
            <Button className='ms-3' variant='outline-warning' size='sm' onClick={() => onHandleClick(data.url)}>
              Detalles
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
export default ListContainer
