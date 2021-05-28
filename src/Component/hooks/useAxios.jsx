import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get('/posts')
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // カスタムフックの返り値
  return { response, error, loading };
};

export default useAxios;
