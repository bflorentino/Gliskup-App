import { useCallback, useEffect, useState } from "react";

export const useFetch = (state = {}) => {
    
    const [ fetchValues, setFetchValues ] = useState(state);
    const [resultFetch, setResultFetch ] = useState(null)
    
    // let abortController = useMemo(() => new AbortController(), [])
   
    const fetchData = useCallback(async () => {

        const request = {
            method: fetchValues.method,
            headers: fetchData.headers ? fetchValues.headers : undefined,
            body: fetchValues.body ? fetchValues.body : undefined,
            // signal: abortController.signal
        }

        const result =  await fetch(fetchValues.url, request)
        return await result.json()

    },[fetchValues] )

    const resetFetchValues = useCallback(() => {
        setFetchValues({})
        setResultFetch(null)
    }, [])
    
    useEffect(()=> {

        if(fetchValues.url){
            fetchData() 
            .then(result => { 
                setResultFetch(result)
            })
        }

        // return () => {
        //     abortController.abort()
        // } 

    }, [fetchValues, fetchData ])

    const handleFetchValues = useCallback((url, method, headers, body) => {
        setFetchValues({
            url,
            method,
            headers,
            body
        })
    }, [])

    return [ handleFetchValues, resultFetch, resetFetchValues ]
}