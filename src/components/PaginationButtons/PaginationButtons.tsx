import { Button, Col, Container, Row } from 'react-bootstrap'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  next: string | null
}

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
