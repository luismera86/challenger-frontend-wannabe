import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
 
  return (
    <Container className=' d-flex flex-column justify-content-center bg-black' fluid>
      <Row>
        <Col className='d-flex flex-column justify-content-center align-content-center ' xs={12}>
          <h1 className=' text-center mt-4 text-white-50 '>Challenger Frontend</h1>
          <img className='w-50 align-self-center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png" alt="" />
        </Col>
      </Row>
      <Row>
        <Col className='text-warning'>
          <p>Creado por Luis Mera</p>
          <p>Link del <a className='text-decoration-none' href="https://github.com/luismera86/challenger-frontend-wannabe">Repositorio</a></p>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
