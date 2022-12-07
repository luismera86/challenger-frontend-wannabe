import { Container, Spinner } from 'react-bootstrap'

import { CharacterDetails } from '../../pages/Peoples/components'
import { Loading } from '../Loading'
import { useAppSelector } from '../../redux/app'

type dataProps = {
  url?: string
}

const DataDetailsContainer = () => {
  const dataDetails = useAppSelector((state) => state.dataDetails)
  const { data, isLoading } = dataDetails
  const newData: dataProps = {
    ...data,
  }

  return (
    <Container className='bg-black' fluid>
      {newData.url?.search('people') !== -1 && !isLoading ? (
        <CharacterDetails data={data} />
      ) : (
			<Loading />	 
      )}
      {/* {newData.url?.search('films') !== -1 && <div>fimls</div>}
      {newData.url?.search('specie') !== -1 && <div>specie</div>}
      {newData.url?.search('star') !== -1 && <div>star</div>} */}
    </Container>
  )
}
export default DataDetailsContainer
