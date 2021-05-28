import { useState, useEffect } from 'react';
import useAxios from './Component/hooks/useAxios';

const App = () => {
  const { response, loading, error } = useAxios({
    method: 'post',
    url: '/posts',
    headers: JSON.stringify({ accept: '*/*' }),
    body: JSON.stringify({
      userId: 1,
      id: 19392,
      title: 'title',
      body: 'Sample text',
    }),
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <div>
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
          <div>{data && <p>{data.id}</p>}</div>
        </div>
      )}
    </div>
  );
};

export default App;
