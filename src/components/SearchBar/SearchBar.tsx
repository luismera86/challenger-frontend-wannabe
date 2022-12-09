/* 

SearchBar

The search bar is associated to the search endpoint provided by the api, used by redux .

*/

import { Col, Form, Row } from 'react-bootstrap'

import { ChangeEvent } from 'react'

interface Props {
  searchResults: string
  setSearchResults: React.Dispatch<React.SetStateAction<string>>
}

// searchResults and setSearchResults, is a state that must be created in the parent component, which we use to resolve the data in the search for api information.
const SearchBar = ({ searchResults, setSearchResults }: Props) => {
  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchResults(event.target.value) // Makes a request to the api to a search endpoint of its own
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
              value={searchResults}
              onChange={onHandleChange}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}
export default SearchBar
