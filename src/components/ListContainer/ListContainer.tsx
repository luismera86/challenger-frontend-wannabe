/* 
ListContainer

This component is in charge of receiving the data from the state of redux. 
It performs a mapping of the information showing individually the names or titles of each element and character.
Each element or character has its own detail button that directs to the properties of each one, it is associated to an onHandleClick function that determines by means of conditionals to know what type of information it has to show, executing a function emitted by a custom hook useLink().

*/

import { Button, Col, Container, Row } from 'react-bootstrap'

import { useLink } from '@/hooks'

interface Props {
  results: any[]
}

// The results represent the information coming from the request in order to extract the name or title depending on the type of data coming in.
const ListContainer = ({ results }: Props) => {
  const {
    onHandleRedirectCharacter,
    onHandleRedirectSpecie,
    onHandleRedirectStarShip,
    onHandleRedirectVehicle,
    onHandledRedirectPlanet,
    onHandleRedirectFilm,
  } = useLink()

  // Identifies part of the received route to determine to which address to redirect.
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
