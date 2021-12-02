import React from "react";

export default function MainPage(props) {
    return (
        <table className="main-page__table">
           {props.data?.map((item) => <tr className="main-page__item">
               <td>Ticker: <strong>{item?.ticker}</strong></td>
               <td>Percent: <strong>{item?.change_percent}</strong></td>
               <td>Dividend: <strong>{item?.dividend}</strong></td>
               <td>Exchange: <strong>{item?.exchange}</strong></td>
               <td>Last trade: <strong>{new Date(item?.last_trade_time).toLocaleString()}</strong></td>
               <td>Price: <strong>{item?.price}</strong></td>
               <td>Yield: <strong>{item?.yield}</strong></td>
           </tr>)}
        </table>
    )
}
