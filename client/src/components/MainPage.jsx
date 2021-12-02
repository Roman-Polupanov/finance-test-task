import React from "react";

export default function MainPage({ updatePage }) {

    const [apple, setApple] = React.useState('')
    const [google, setGoogle] = React.useState('')
    const [microsoft, setMicrosoft] = React.useState('')
    const [amazon, setAmazon] = React.useState('')
    const [facebook, setFacebook] = React.useState('')
    const [tesla, setTesla] = React.useState('')

    // axios.get('/', (req, res) => {
    //     res.JSON('ticker')
    // });

    return (
        <div>
            <div onClick={setApple}>{apple} a</div>
            <div>{google}</div>
            <div>{microsoft}</div>
            <div>{amazon}</div>
            <div>{facebook}</div>
            <div>{tesla}</div>
        </div>
    )
}
