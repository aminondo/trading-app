import { useState, useEffect } from 'react';
const PATH: string = 'https://demomocktradingserver.azurewebsites.net';

interface Service<T> {
  status: 'init' | 'loading' | 'error' | 'fetched',
  data?: T,
  error?: string
}

function useFetch<T>(url: string, userid?: string) : [T | undefined, boolean, string] {
  /*
  const [ data, setData ] = useState<Service<T>>({ 
      status: 'init', 
      data: undefined, 
      error: undefined 
  });
  */
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        //setData({ status: 'loading' });
        let response = null;
        if (userid) {
          response = await fetch(`${PATH}${url}`,{ 
            headers: {
              userid
            }
          });
        } else {
          response = await fetch(`${PATH}${url}`);
        }
        const json = await response.json()

        if (json) {
          setLoading(false);
          setData(json);
          //const result = await response.json();
          //setData({ data: result, status: 'fetched' });
        }
      } catch (e) {
        setLoading(false);
        setError(e.message);
        console.error(e);
      }
    }
    fetchData();
  }, [url, userid]);

  return [data, loading, error];
};

export default useFetch;