import { Button, Col, Container, Row } from 'react-bootstrap'

import { getCharacterDetails } from '@/redux/features/slices/characters/charactersDetailsSlice'
import { useAppDispatch } from '@/redux'
import { useNavigate } from 'react-router-dom'

interface Props {
  results: any[]
}
const ListContainer = ({ results }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onHandleClick = (url: any) => {
    if (url.search('people') !== -1) {
      dispatch(getCharacterDetails(url))
      navigate('/characterdetails')
    } else if (url.search('films') !== -1) {
      
    } else if (url.search('plantes') !== -1) {

    } else if (url.search('species') !== -1) {

    } else if (url.search('vehicle') !== -1) {

    } else if (url.search('starship') !== -1) {
      
    }

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
