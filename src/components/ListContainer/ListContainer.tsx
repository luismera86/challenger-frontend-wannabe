import { Button, Col, Container, Row } from 'react-bootstrap'

import { getDataDetails } from '../../redux/features/dataDetails/dataDetails'
import { useAppDispatch } from '../../redux/app'
import { useNavigate } from 'react-router-dom'

interface Props {
  results: any[]
}
const ListContainer = ({ results }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const onHandleClick = (url: any) => {
    dispatch(getDataDetails(url))
    navigate('/dataDetails')
  }

  return (
    <Container>
      {results?.map((data) => (
        <Row className='mt-3' key={data.name || data.title}>
          <Col xs={3}>{data.name || data.title} </Col>
          <Col>
            <Button className='ms-3' variant='outline-warning' size='sm' onClick={() => onHandleClick(data.url)}>
              Detalles
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
}
export default ListContainer
