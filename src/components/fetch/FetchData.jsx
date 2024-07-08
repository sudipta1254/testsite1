import { useState, useEffect } from 'react'

const FetchData = (url, KEY) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const abortCont = new AbortController();

      const fetchData = async () => {
         console.log("Fetching..")
         console.log(url)
         try {
            const response = await fetch(url, { signal: abortCont.signal });
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (result.error) {
               throw new Error(result.error.message);
            }
            setData(result);
            setLoading(false)
            setError(null)
         } catch (err) {
            if (err.name === 'AbortError') {
               console.log('fetch aborted')
            } else {
               // auto catches network / connection error
               setData(null);
               setLoading(false);
               setError(err.message);
            }
         }
      };
      fetchData();

      // abort the fetch
      return () => abortCont.abort();
   }, [url]);

   return { data, loading, error };
}

export default FetchData;