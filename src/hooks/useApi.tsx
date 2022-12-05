import { AxiosInstance } from 'axios'
import { useState } from 'react'

/* 
This custom hook is made for use with the axios library.
npm install axios
How to use it: 
- Create an instance of axios in api.tsx file.
const api = axios.create({
  baseURL: 'https://url.com/api',
})

- Calling the hook in the component
const { } = useApi( api )

- Elements to unstructured
getApi: is a function that receives by parameter the path of the endpoint to be requested example: getApi("/people") 
data: the server response
isLoading: reference to the loading status of the request
hasError: error response 
*/
interface ApiProps<T> {
  api: AxiosInstance
  data?: T 
}

const useApi = ( api: AxiosInstance) => {
  const [apiState, setApiState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getApi = async (path: string) => {
    setApiState({
      ...apiState,
      isLoading: true,
    })
    try {
      const resp = await api.get(path)
      const data = resp.data
      setApiState({
        data,
        isLoading: false,
        hasError: null,
      })
      return data
    } catch (error: any) {
      setApiState({
        ...apiState,
        isLoading: false,
        hasError: error,
      })
    }
  }

  return {
    apiState,
    getApi,
  }
}
export default useApi
