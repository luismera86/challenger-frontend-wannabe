import { Col, Container, Row } from 'react-bootstrap';

import { getCharacterDetails } from '@/redux/features/slices/characters/charactersDetailsSlice';
import { useAppDispatch } from '@/redux';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCharacterDetails('https://swapi.dev/api/people/2/'))
   
  }, [])
  
  return (
    <Container className=' d-flex flex-column bg-black' fluid>
      <Row>
        <Col xs={12}>
          <h1 className=' text-center mt-4 text-white-50 '>Bienvenidos a la API De Star Wars</h1>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
