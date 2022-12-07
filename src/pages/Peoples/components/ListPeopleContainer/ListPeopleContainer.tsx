import { Button, Col, Container, Row } from 'react-bootstrap'

interface Props {
  results: any[]
}
const ListPeopleContainer = ({ results }: Props) => {
  return (
    <Container>
      {results?.map((data) => (
        <Row className='mt-3' key={data.name || data.title}>
          <Col xs={3}>{data.name || data.title }  </Col>
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
