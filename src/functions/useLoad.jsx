import { useEffect, useState } from 'react'

const useLoad = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        const random = 500 + Math.random()*1500
        setTimeout(()=>{
            setLoading(false)
        },random)
    },[])
  return {loading}
}

export default useLoad