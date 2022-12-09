/* 
PaginationButtons

Los botones de pagination funcionan como un contador que suma o resta el número de página.
Detecta cuando una pagina es menor que 1 el button desaparece para no poder seguir retrocediendo, en caso de recibir un null por parte de la api el button de avanzar desaparece

*/

import { Button, Col, Container, Row } from 'react-bootstrap'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  next: string | null
}

// page and setPage is a state that must be created in the parent component to be able to select the page number, next receives the information from the api if a page exists next receives a string with the url or null in case it does not exist
const PaginationButtons = ({ page, setPage, next }: Props) => {
  const onHandleClickNext = () => {
    if (next !== null) setPage(page + 1)
  }

  const onHandleClickBack = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  return (
    <Container>
      <Row className='mt-4 mb-5'>
        <Col className=' d-flex justify-content-start'>
          {page > 1 && (
            <Button className='' variant='outline-warning' onClick={onHandleClickBack}>
              Anterior
            </Button>
          )}
        </Col>
        <Col className=' d-flex justify-content-end'>
          {next !== null && (
            <Button className='' variant='outline-warning' onClick={onHandleClickNext}>
              Siguiente
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default PaginationButtons
