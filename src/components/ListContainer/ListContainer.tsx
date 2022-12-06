import { Container } from 'react-bootstrap'

const ListContainer = () => {
  
  
  return (
    <Container>
      {/* {results.map((d) => (
        <Row className='mt-3' key={}>
          <Col xs={3}>{d.name} </Col>
          <Col>
            <Button className='ms-3' variant='outline-warning' size='sm'>
              Detalles
            </Button>
          </Col>
        </Row>
      ))}
      {/* //TODO separa los botones en otro componente */}
      {/* <Row className='mt-4'>
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
      </Row> */} 
    </Container>
  )
}
export default ListContainer
