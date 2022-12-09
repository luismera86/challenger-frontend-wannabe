import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'
import { useLink } from '@/hooks'

const CharacterDetails = () => {
  const character = useAppSelector((state) => state.characterDetail)

  const { data, isLoading } = character
  const { onHandledRedirectPlanet, onHandleRedirectFilm } = useLink()

  return (
    <Container className='bg-black text-white-50' fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Row>
            <Col className='d-flex justify-content-center mt-5'>
              <h2>{data.name}</h2>
            </Col>
          </Row>
          <Container>
            <Row className='border border-1 border-warning rounded-2 p-5'>
              <Col>
                <p>Nombre: {data.name}</p>
                <p>Altura: {data.height}</p>
                <p>Peso: {data.mass}</p>
                <p>Color de Pelo: {data.hair_color}</p>
                <p>Color de Piel: {data.skin_color}</p>
                <p>Color de Ojos: {data.eye_color}</p>
                <p>Año de nacimiento: {data.birth_year}</p>
                <p>Sexo: {data.gender}</p>
                <p>
                  Planeta:
                  <span className='ms-1 links' onClick={() => onHandledRedirectPlanet(data.homeworld.link)}>
                    {data.homeworld.name}
                  </span>
                </p>
                <p>Especie: {!!data.species && 'n/a'}</p>
                <p>
                  Películas:
                  {data.films.map((f, index) => (
                    <span className='ms-1 links' onClick={() => onHandleRedirectFilm(f.link)} key={index}>
                      {f.name} -
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
export default CharacterDetails
