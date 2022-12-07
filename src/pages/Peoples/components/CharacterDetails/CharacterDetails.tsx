import { Col, Container, Row } from 'react-bootstrap'

import { People } from '../../../../models'

interface Props {
  data: any
}

const CharacterDetails = ({ data }: Props) => {
  const dataDetails: People = data

  return (
    <Container className='p-5'>
      <Row>
        <Col className='d-flex justify-content-center align-content-center'>
          <h2 className='text-white-50'>{dataDetails.name}</h2>
        </Col>
		  </Row>
		  <Row>
			  <Container className='border p-3 border-1 border-warning rounded-3'>
				  <Row>
					  <Col className='text-white-50'>
						  <p>Nombre: {dataDetails.name }</p>
						  <p>Año de Nacimiento: {dataDetails.birth_year }</p>
						  <p>Genero: {dataDetails.gender }</p>
						  <p>Año de Nacimiento: {dataDetails.birth_year }</p>
						  <p>Año de Nacimiento: {dataDetails.birth_year }</p>
					  </Col>
				  </Row>
			  </Container>
		  </Row>
    </Container>
  )
}
export default CharacterDetails
