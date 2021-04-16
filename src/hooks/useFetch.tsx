import { useState, useEffect } from 'react';
const PATH:string = 'https://demomocktradingserver.azurewebsites.net';

interface Service<T> {
    status: 'init' | 'loading' | 'error' | 'fetched',
    data?: T,
    error?: string
}

function useFetch<T>(url: string):Service<T> {
    const [ data, setData ] = useState<Service<T>>({ 
        status: 'init', 
        data: undefined, 
        error: undefined 
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({ status: 'loading' });
                const response = await fetch(`${PATH}${url}`);

                if (response.status === 200) {
                    const result = await response.json();
                    setData({ data: result, status: 'fetched' });
                } else {
                    throw Error(`Error ${response.status}`);
                }
            } catch (e) {
                setData({ error: e, status: 'error' });
                console.error(e);
            }
        }
        fetchData();
    }, []);
    
    return data;
};

export default useFetch;