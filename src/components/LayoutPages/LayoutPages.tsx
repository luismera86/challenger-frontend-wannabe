import { Col, Container, Form, Row } from 'react-bootstrap'

interface LayoutPagesProps {
  title: string
  data?: object
}

const LayoutPages = ({ title, data }: LayoutPagesProps) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center mt-5 text-warning'>{title}</h2>
        </Col>
      </Row>
      <Row className=' d-flex flex-column align-content-center'>
        <Col xs={6}>
          {/*  // todo separar en componente la barra de búsqueda y hacer un componente nuevo donde renderice el listado de nombres con un botón de detalles para que mande a un componente que muestra todos los detalles del personaje, planeta, nave, etc  */}
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label className='text-warning fs-5'>Buscar</Form.Label>
              <Form.Control className='bg-dark' type='search' placeholder='Ingrese su búsqueda' />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default LayoutPages
