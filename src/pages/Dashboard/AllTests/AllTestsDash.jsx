import { Delete } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateModal from "../UpdateModal/UpdateModal";

const AllTestsDash = () => {
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    
    const handleOpen = (test) => {
        setSelectedTest(test)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const handleRefetch = ()=>{
        refetch()
    }
    const [selectedTest, setSelectedTest] = useState(null)

    const { data: test = [], refetch } = useQuery({
        queryKey: ['test'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allTests')
            return res.data
        }
    })

    // console.log('inthe asfads', test);

    const handleDelete = test => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allTests/${test._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `${test.title} has been Delete.`,
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
                        <TableCell sx={{ fontWeight: 700 }}>Name </TableCell>
                        <TableCell align="" sx={{ fontWeight: 700 }}>Details</TableCell>
                        <TableCell align="" sx={{ fontWeight: 700 }}>Update</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>Delete</TableCell>
                        {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {test.map((row) => (
                        // console.log(row)
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="left">{row.details}</TableCell>
                            <TableCell onClick={() => handleOpen(row)} align="left" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}>Update</TableCell>
                            {/* <Button fullWidth  align="center" sx={{ marginTop:'6px'}} >Cancel</Button> */}
                            <TableCell onClick={() => handleDelete(row)} align="center" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}><Delete /></TableCell>

                        </TableRow>


                    ))}
                    <UpdateModal
                        open={open}
                        handleClose={handleClose}
                        selectedTest={selectedTest}
                        handleRefetch={handleRefetch}
                    />

                </TableBody>

            </Table>
        </TableContainer>
    );
};

export default AllTestsDash;