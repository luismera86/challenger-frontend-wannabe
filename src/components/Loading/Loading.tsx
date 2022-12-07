import { Col, Container, Row, Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Spinner animation='border' variant='warning' />
        </Col>
      </Row>
    </Container>
  )
}
export default Loading
