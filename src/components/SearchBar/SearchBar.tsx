import { Col, Form, Row } from 'react-bootstrap'

import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const onHandleChange = (event: any) => {
    setSearch(event.target.value)
    
  }
  return (
    <Row className=' d-flex flex-column align-content-center'>
      <Col xs={6}>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label className='text-warning fs-5'>Buscar</Form.Label>
            <Form.Control
              className='bg-dark border-warning text-warning'
              type='search'
              placeholder='Ingrese su búsqueda'
              value={search}
              onChange={onHandleChange}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}
export default SearchBar
