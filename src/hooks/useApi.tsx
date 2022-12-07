import { useEffect, useState } from "react"

import axios from "axios"

const useApi = <T,>() => {
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    
   useEffect(() => {
    
   }, [data])
   

    const sendRequest =async (path: string) => {
        try {
            const resp = await axios.get(path)
            setData(resp.data)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        data,
        error,
        isLoading,
        sendRequest
  }
}
export default useApi