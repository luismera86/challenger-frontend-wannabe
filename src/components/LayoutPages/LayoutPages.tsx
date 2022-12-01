import { Col, Container, Form, Row } from 'react-bootstrap'

import { ListContainer } from '../ListContainer'
import { SearchBar } from '../SearchBar'

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
      {/*  // todo separar en componente la barra de búsqueda y hacer un componente nuevo donde renderice el listado de nombres con un botón de detalles para que mande a un componente que muestra todos los detalles del personaje, planeta, nave, etc  */}
      <SearchBar />
      <ListContainer />
    </Container>
  )
}
export default LayoutPages
