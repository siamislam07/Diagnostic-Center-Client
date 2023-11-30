import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTest from "../../../Hooks/useTest";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EventBusy, PersonRemove } from "@mui/icons-material";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDelete = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `${user.info.name} has been Delete.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make ${user?.info?.name} an Admin`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Done!',
                                `${user.info.name} is an Admin Now!`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleMakeUser = user =>{
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make ${user?.info?.name} an User`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/user/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Done!',
                                `${user.info.name} is an User Now!`,
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
                        <TableCell align="" sx={{ fontWeight: 700 }}>E-mail</TableCell>
                        <TableCell align="" sx={{ fontWeight: 700 }}>Role</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>Remove</TableCell>
                        {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        // console.log(row)
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.info.name}
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            {
                                row.role === 'admin' ? <TableCell onClick={() => handleMakeUser(row)} align="left" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}>Make User</TableCell> 
                                : <TableCell onClick={() => handleMakeAdmin(row)} align="left" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}>Make Admin</TableCell>
                            }
                            {/* <Button fullWidth  align="center" sx={{ marginTop:'6px'}} >Cancel</Button> */}
                            <TableCell onClick={() => handleDelete(row)} align="center" sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}><PersonRemove /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllUsers;