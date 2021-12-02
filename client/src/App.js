import axios from 'axios';
import React, { useState } from 'react'
import './App.css';
import MainPage from './components/MainPage';
import reducer from './redux/reducer';
import { socket } from './sockets/socket';

function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    ticker: true,
  });
  const updatePage = (updated) => {
    dispatch({
      type: 'UPDATED',
      payload: updated
    });
    socket.emit('start', updated);
    console.log('updated')
  }
  // const setTickers = (updated) => {
  //   dispatch({
  //     type: 'UPDATED',
  //     payload: updated
  //   });
  // };
  // const setTickers = (function () {
  //   socket.emit('start');
  //   socket.on('ticker', function (response) {
  //     const res = Array.isArray(response) ? response : [response];
  //     const json = JSON.stringify(res)
  //     console.log(`Данные получены с сервера: ${json}`)
  //     return json
  //   });
  // });

  // const tick = setTickers()



  // React.useEffect(() => {
  //   socket.emit('start');
  //   socket.on('ticker', function (response) {
  //     const res = Array.isArray(response) ? response : [response];
  //     const json = JSON.stringify(res)
  //     console.log(`Данные получены с сервера: ${json}`)

  //   });
  // }, [])

  window.socket = socket;


  return (
    <div className='wrapper'>
      <MainPage updatePage={updatePage} />
    </div>
  );
}

export default App;
