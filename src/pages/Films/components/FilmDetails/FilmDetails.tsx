import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'
import { useLink } from '@/hooks'

const FilmDetails = () => {
  const films = useAppSelector((state) => state.filmsDetail)
  const { data, isLoading } = films
  
  const {onHandleRedirectCharacter, onHandleRedirectSpecie, onHandleRedirectStarship,onHandleRedirectVehicle, onHandledRedirectPlanet} = useLink()
 

  return (
    <Container className='bg-black text-white-50' fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Row>
            <Col className='d-flex justify-content-center mt-5'>
              <h2>{data.title}</h2>
            </Col>
          </Row>
          <Container>
            <Row className='border border-1 border-warning rounded-2 p-5'>
              <Col>
                <p>Titulo: {data.title}</p>
                <p>Episodio: {data.episode_id}</p>
                <p>Sinopsis: {data.opening_crawl}</p>
                <p>Director: {data.director}</p>
                <p>Productor: {data.producer}</p>
                <p>Fecha de estreno: {data.release_date}</p>
                <p>
                  Personajes:
                  {data.characters.map((p, index) => (
                    <span onClick={() => onHandleRedirectCharacter(p.link)} className='ms-1 links' key={index}>
                      {p.name} -
                    </span>
                  ))}
                </p>
                <p>
                  Planetas:
                  {data.planets.map((p, index) => (
                    <span onClick={() => onHandledRedirectPlanet(p.link)} className='ms-1 links' key={index}>
                      {p.name} -
                    </span>
                  ))}
                </p>
                <p>
                  Naves Estelares:
                  {data.starships.map((p, index) => (
                    <span onClick={() => onHandleRedirectStarship(p.link)} className='ms-1 links' key={index}>
                      {p.name} -
                    </span>
                  ))}
                </p>
                <p>
                  Naves:
                  {data.vehicles.map((p, index) => (
                    <span onClick={() => onHandleRedirectVehicle(p.link)} className='ms-1 links' key={index}>
                      {p.name} -
                    </span>
                  ))}
                </p>
                <p>
                  Especies:
                  {data.species.map((p, index) => (
                    <span onClick={() => onHandleRedirectSpecie(p.link)} className='ms-1 links' key={index}>
                      {p.name} -
                    </span>
                  ))}
                </p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default FilmDetails
