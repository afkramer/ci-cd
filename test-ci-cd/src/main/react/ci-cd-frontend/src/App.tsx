import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/test`;
  //const baseUrl = 'http://localhost:8080/test';

  const getBackendMessage = async (): Promise<string> => {
    console.log(baseUrl);
    if (baseUrl !== 'undefined/test') {
      const { data } = await axios.get<string>(baseUrl);
      return data;
    } else {
      return 'default message';
    }
  };

  useEffect(() => {
    if (message === '') {
      getBackendMessage()
        .then(setMessage)
        .catch((error) => {
          console.error('Error while fetching backend message', error.message);
          setMessage('default message');
        });
    }
  }, [message]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>Message from backend is {message}</h1>
        <br></br>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
