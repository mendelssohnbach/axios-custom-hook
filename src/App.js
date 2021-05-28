import Annum from './Component/Annum';
import useAxios from './Component/hooks/useAxios';
import Month from './Component/Month';

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
      <br />
      <br />
      <Month name="Jack" years={10} />

      <br />
      <br />
      <br />

      <Annum name="Jack" years={10} />
    </div>
  );
};

export default App;
