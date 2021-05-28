# useAxios : A simple custom hook for calling APIs using axios

[URL](https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj)

## Refactorring

```shell
$ npm ls
├── @testing-library/jest-dom@5.12.0
├── @testing-library/react@11.2.7
├── @testing-library/user-event@12.8.3
├── axios@0.21.1
├── react-dom@17.0.2
├── react-scripts@4.0.3
├── react@17.0.2
└── web-vitals@1.1.2
```

`useAxios.jsx`

```js
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return { response, error, loading };
};
```

`App.js`

```js
import useAxios from './Component/hooks/useAxios';

const App = () => {
  const { response, loading, error } = useAxios({
    method: 'POST',
    url: '/posts',
    headers: {
      // no need to stringify
      accept: '*/*', // すべてのMIME タイプ
    },
    data: {
      // no need to stringify
      userId: 1,
      id: 19392,
      title: 'title',
      body: 'Sample text',
    },
  });

  return (
    <div className="App">
      <h1>Posts</h1>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>
            {' '}
            {
              // no need to use another state to store data, response is sufficient
              response && <p>{response.id}</p>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
```

