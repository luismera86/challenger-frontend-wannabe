import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'

const StarShipDetails = () => {
  const starShip = useAppSelector((state) => state.starShipDetails)
  const { data, isLoading } = starShip

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
                <p>Modelo: {data.model}</p>
                <p>Fabricante: {data.manufacturer}</p>
                <p>Coste en créditos: {data.cost_in_credits}</p>
                <p>Longitud: {data.length}</p>
                <p>Velocidad atmosférica máxima: {data.max_atmosphering_speed}</p>
                <p>Tripulación: {data.crew}</p>
                <p>Pasajeros: {data.passengers}</p>
                <p>Capacidad de carga: {data.cargo_capacity}</p>
                <p>Consumibles: {data.consumables}</p>
                <p>Clase de Nave: {data.starship_class}</p>
                <p>Pilotos: {data.pilots}</p>
                <p>Películas: {data.films}</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default StarShipDetails
