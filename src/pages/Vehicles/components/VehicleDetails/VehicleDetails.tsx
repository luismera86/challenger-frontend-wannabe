import { Col, Container, Row } from 'react-bootstrap'

import { Loading } from '@/components'
import { useAppSelector } from '@/redux'
import { useLink } from '@/hooks'

const VehicleDetails = () => {
  const vehicle = useAppSelector((state) => state.vehiclesDetails)
  const { data, isLoading } = vehicle
  const {onHandleRedirectFilm, onHandleRedirectCharacter} = useLink()

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
                <p>Clase de Vehículo: {data.vehicle_class}</p>
                <p>Pilotos: {data.pilots.map((p, index) => (
                    <span className='ms-1 links' onClick={() => onHandleRedirectCharacter(p.link)} key={index}>
                      {p.name} -
                    </span>
                  ))}</p>
                <p>Películas: {data.films.map((f, index) => (
                    <span className='ms-1 links' onClick={() => onHandleRedirectFilm(f.link)} key={index}>
                      {f.name} -
                    </span>
                  ))}</p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  )
}
export default VehicleDetails
