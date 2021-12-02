import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MainPage(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Ticker</TableCell>
                        <TableCell align="right">Percent</TableCell>
                        <TableCell align="right">Dividend</TableCell>
                        <TableCell align="right">Exchange</TableCell>
                        <TableCell align="right">Last trade</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Yield</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data?.map((item) => (
                        <TableRow
                            key={item?.ticker}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{item?.ticker}</TableCell>
                            <TableCell align="right">{item?.change_percent}</TableCell>
                            <TableCell align="right">{item?.dividend}</TableCell>
                            <TableCell align="right">{item?.exchange}</TableCell>
                            <TableCell align="right">{item?.last_trade_time}</TableCell>
                            <TableCell align="right">{item?.price}</TableCell>
                            <TableCell align="right">{item?.yield}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
