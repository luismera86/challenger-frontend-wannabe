import { Button, Col, Container, Row } from 'react-bootstrap'

import { People } from '../../models'

interface ListContainerProps {
  peoples: People[]
  details: boolean
}

const ListContainer = ({ peoples = [], details = false }: ListContainerProps) => {

  return (
    <Container>
      {peoples.map((people) => (
        <Row className='mt-3' key={people.name}>
			  <Col xs={3}>{people.name} </Col>
			  <Col><Button className='ms-3' variant='outline-warning' size='sm'>Detalles</Button></Col>
        </Row>
	  ))}
		  <Button variant='outline-warning'>Siguiente</Button>
    </Container>
  )
}
export default ListContainer
