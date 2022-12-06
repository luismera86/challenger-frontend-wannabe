import { Button, Col, Container, Row } from "react-bootstrap"

const ListPeopleContainer = () => {
  return (
	<Container>
     {results.map((d) => (
        <Row className='mt-3' key={}>
          <Col xs={3}>{d.name} </Col>
          <Col>
            <Button className='ms-3' variant='outline-warning' size='sm'>
              Detalles
            </Button>
          </Col>
        </Row>
      ))}
     
      
    </Container>
  )
}
export default ListPeopleContainer