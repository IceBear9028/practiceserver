import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const MuiTable = ({ data, maxHeight }) => {
    return (
        <TableContainer sx={{ maxHeight: { maxHeight } }} component={Paper}>
            <Table stickyHeader aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((item, index) => {
                            return (
                                <TableCell key={index} item={item}>{item}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {Object.values(row).map((value, index) => {
                                return (
                                    <TableCell key={index} >{value}</TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MuiTable