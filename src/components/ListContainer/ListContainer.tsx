import { Button, Col, Container, Row } from 'react-bootstrap'

import { useLink } from '@/hooks'

interface Props {
  results: any[]
}
const ListContainer = ({ results }: Props) => {
  const {onHandleRedirectCharacter, onHandleRedirectSpecie, onHandleRedirectStarShip,onHandleRedirectVehicle, onHandledRedirectPlanet, onHandleRedirectFilm} = useLink()

  const onHandleClick = (url: any) => {
    if (url.search('people') !== -1) {
      onHandleRedirectCharacter(url)
    } else if (url.search('films') !== -1) {
      onHandleRedirectFilm(url)
    } else if (url.search('planets') !== -1) {
      onHandledRedirectPlanet(url)
    } else if (url.search('species') !== -1) {
      onHandleRedirectSpecie(url)
    } else if (url.search('vehicle') !== -1) {
      onHandleRedirectVehicle(url)
    } else if (url.search('starship') !== -1) {
      onHandleRedirectStarShip(url)
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
