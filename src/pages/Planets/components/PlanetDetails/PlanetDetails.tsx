import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'

const PlanetDetails = () => {
  const planet = useAppSelector((state) => state.planetDetails)
  const { data, isLoading } = planet

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
                <p>Periodo de rotación: {data.rotation_period}</p>
                <p>Periodo de orbita: {data.orbital_period}</p>
                <p>Diámetro: {data.diameter}</p>
                <p>Clima: {data.climate}</p>
                <p>Gravedad: {data.gravity}</p>
                <p>Terreno: {data.terrain}</p>
                <p>Superficie de agua: {data.surface_water}</p>
                <p>Población: {data.population}</p>
                <p>Residentes: {data.residents} </p>
                <p>Películas: {data.films} </p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default PlanetDetails