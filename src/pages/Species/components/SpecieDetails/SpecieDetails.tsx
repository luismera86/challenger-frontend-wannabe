import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'

const SpecieDetails = () => {
  const specie = useAppSelector((state) => state.speciesDetails)
  const { data, isLoading } = specie

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
                <p>Clasificación: {data.classification}</p>
                <p>Designación: {data.designation}</p>
                <p>Altura Media: {data.average_height}</p>
                <p>Color de piel: {data.skin_colors}</p>
                <p>Color de Ojos: {data.eye_colors}</p>
                <p>Esperanza de vida: {data.average_lifespan}</p>
                <p>Mundo: {data.homeworld}</p>
                <p>Idioma: {data.language}</p>
                <p>Gente: {data.people}</p>
                <p>Películas: {data.films}</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default SpecieDetails
