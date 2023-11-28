import useTest from "../../../Hooks/useTest";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

function createData(TestName, Details, Date,) {
    return { TestName, Details, Date, };
}
const Appointments = () => {
    const [booking] = useTest()
    console.log(booking);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Test Name </TableCell>
                        <TableCell align="">Details</TableCell>
                        <TableCell align="">Date</TableCell>
                        <TableCell align="">Action</TableCell>
                        {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booking.map((row) => (
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
                            {/* <Button fullWidth  align="center" sx={{ marginTop:'6px'}} >Cancel</Button> */}
                            <TableCell align="" sx={{ cursor:'pointer'}}>Cancel</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Appointments;