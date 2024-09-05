import { useEffect, useState } from "react"

export const useFetch = (url) => {

    //local cache 
    const localCache = {};

    const [state , setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async () => {
        if(localCache[url]) {
            console.log('from cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        };
        setLoadingState();
        const resp = await fetch(url);
        if(!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: resp.status
            });
            return;
        }
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });

        //manejo del cache
        localCache[url] = data;
        // console.log(data);

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error,
        
    }
}