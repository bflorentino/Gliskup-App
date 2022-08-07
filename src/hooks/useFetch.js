import { useCallback, useEffect, useRef, useState } from "react";

export const useFetch = (state = {}) => {
    
    const [ fetchValues, setFetchValues ] = useState(state);
    const [resultFetch, setResultFetch ] = useState(null)
    const isMounted = useRef(true);
   
    const fetchData = useCallback(async () => {

        const request = {
            method: fetchValues.method,
            headers: fetchData.headers ? fetchValues.headers : undefined,
            body: fetchValues.body ? fetchValues.body : undefined,
        }

        const result =  await fetch(fetchValues.url, request)
        return await result.json()

    },[fetchValues.method, fetchValues.headers, fetchValues.body, fetchValues.url] )

    useEffect(() => {
        return() => {
            isMounted.current = false;
        }
    }, []);

    useEffect(()=> {
        
        if(fetchValues.url){
            fetchData() 
            .then(result => { 
                if(isMounted.current){
                    setResultFetch(result)
                }
            })
        }
    }, [fetchValues, fetchData])

    const handleFetchValues = (url, method, headers, body) => {
        
        setFetchValues({
            url,
            method,
            headers,
            body
        })
    }
    
    return { handleFetchValues, resultFetch}
}