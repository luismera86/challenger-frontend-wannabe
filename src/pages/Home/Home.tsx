import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className=' d-flex flex-column bg-black' fluid>
      <Row>
        <Col xs={12}>
          <h1 className=' text-center mt-4 text-white-50 '>Bienvenidos a la API De Star Wars</h1>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
