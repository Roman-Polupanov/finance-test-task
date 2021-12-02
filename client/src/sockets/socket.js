import io from 'socket.io-client'

export const socket = io.connect();
socket.on('ticker', function (response) {
    const res = Array.isArray(response) ? response : [response];
    const json = res.map(item => JSON.stringify(item));
    console.log(`Данные получены с сервера: ${json}`)
    return json
});
// socket.on('ticker', function (response) {
//   const res = Array.isArray(response) ? response : [response];
//   const json = JSON.stringify(res)
//   console.log(`Данные получены с сервера: ${json}`)
//   return json
// });
