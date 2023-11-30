import useTest from "../../../Hooks/useTest";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EventBusy } from "@mui/icons-material";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { Button } from "@mui/material";


const Appointments = () => {
    const [booking, refetch] = useTest()
    console.log(booking);
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/userTest/${id}`)
                .then(res=>{
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire(
                            'Canceled!',
                            'Your Booking has been Canceled.',
                            'success'
                        )
                    }
                })
            }
        })
    }

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
                    {booking.map((row) => (
                        // console.log(row)
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="left">{row.details}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            {/* <Button fullWidth  align="center" sx={{ marginTop:'6px'}} >Cancel</Button> */}
                            <TableCell onClick={() => handleDelete(row._id)} align="center" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}><EventBusy /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Appointments;