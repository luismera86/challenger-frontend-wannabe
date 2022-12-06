import { Button, Col, Row } from 'react-bootstrap'

const PaginationButtons = () => {
  return (
    <Row className='mt-4'>
      <Col className=' d-flex justify-content-start'>
        <Button className='' variant='outline-warning'>
          Anterior
        </Button>
      </Col>
      <Col className=' d-flex justify-content-end'>
        <Button className='' variant='outline-warning'>
          Siguiente
        </Button>
      </Col>
    </Row>
  )
}
export default PaginationButtons
