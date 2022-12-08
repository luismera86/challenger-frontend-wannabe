import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'

const CharacterDetails = () => {
  const character = useAppSelector((state) => state.characterDetail)
  
  const { data, isLoading } = character
  
  // todo tratar de mandar una por una las direcciones de los films y que valla guardando en un state nuevo los datos para poder usarlos con un map, puede ser en un hook que tenga un state charactersFilms setCharactersFilms() hacer un ciclo for que por cara iteración setee en reduce y los datos eso los setee en el state 


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
                <p>Mundo: {data.homeworld}</p>
                <p>Películas: {data.films}</p>

              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default CharacterDetails
