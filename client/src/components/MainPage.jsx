import React from "react";
import { socket } from "../sockets/socket";

export default function MainPage({ updatePage }) {

    const [apple, setApple] = React.useState('')
    const [google, setJson] = React.useState('')
    const [microsoft, setMicrosoft] = React.useState('')
    const [amazon, setAmazon] = React.useState('')
    const [facebook, setFacebook] = React.useState('')
    const [tesla, setTesla] = React.useState('')


    React.useEffect(() => {
        socket.emit('start');
        socket.on('ticker', function (response) {
            const res = Array.isArray(response) ? response : [response];
            const json = JSON.stringify(res.quotes)
            setJson((json) => [...json])
            console.log(`Данные получены с сервера: ${json}`)
        });
    }, [])
    // axios.get('/', (req, res) => {
    //     res.JSON('ticker')
    // });

    return (
        <div>
            <div onClick={setApple}>{apple} apple</div>
            <div>{google}</div>
            <div>{microsoft}</div>
            <div>{amazon}</div>
            <div>{facebook}</div>
            <div>{tesla}</div>
        </div>
    )
}
