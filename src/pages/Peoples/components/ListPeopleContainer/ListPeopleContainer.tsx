import { Button, Col, Container, Row } from 'react-bootstrap'
import { People, RespData } from '../../../../models'

const ListPeopleContainer = ({ results }: RespData<People>) => {
  return (
    <Container>
      {results.map(({ name }) => (
        <Row className='mt-3' key={name}>
          <Col xs={3}>{name} </Col>
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
