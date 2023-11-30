import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";

const TestResult = () => {
    const [result ,setResult] = useState()

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ bgcolor: 'paleturquoise' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>Test Name </TableCell>
                        <TableCell align="" sx={{ fontWeight: 700 }}>Details</TableCell>
                        <TableCell align="" sx={{ fontWeight: 700 }}>Date</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>Cancel</TableCell>
                        {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {result.map((row) => (
                        // console.log(row)
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <Button fullWidth  align="center" sx={{ marginTop:'6px'}} >Cancel</Button>
                            <TableCell  align="center" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}></TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TestResult;