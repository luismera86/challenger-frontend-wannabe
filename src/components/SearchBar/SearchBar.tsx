import { Col, Form, Row } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <Row className=' d-flex flex-column align-content-center'>
      <Col xs={6}>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label className='text-warning fs-5'>Buscar</Form.Label>
            <Form.Control className='bg-dark' type='search' placeholder='Ingrese su búsqueda' />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}
export default SearchBar
