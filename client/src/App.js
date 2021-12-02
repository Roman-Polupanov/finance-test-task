import React, { useEffect, useState } from 'react'
import './App.css';
import MainPage from './components/MainPage';
import { socket } from './sockets/socket';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.emit('start')
    socket.on('ticker', setData);
  }, [])

  return (
    <div>
      <MainPage data={data} />
    </div>
  );
}

export default App;
