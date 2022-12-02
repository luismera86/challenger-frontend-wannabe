import { Col, Container, Row } from 'react-bootstrap'

interface LayoutPagesProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

const LayoutPages = ({ title, children }: LayoutPagesProps) => {
  return (
    <Container className='bg-black' fluid>
      <Row>
        <Col>
          <h2 className='text-center mt-5 text-warning'>{title}</h2>
        </Col>
      </Row>
      {children}
    </Container>
  )
}
export default LayoutPages
