import { useEffect, useState } from 'react'

import { AxiosInstance } from 'axios'

const useApi = (api: AxiosInstance) => {
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
    } catch (error: any) {
      setApiState({
        ...apiState,
        isLoading: false,
        hasError: error
      })
    }
  }

  useEffect(() => {}, [api])

  return {
    data: apiState.data,
    isLoading: apiState.isLoading,
    hasError: apiState.hasError,
    getApi,
  }
}
export default useApi
