import { Grid, Paper, Typography } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UserHome = () => {
    const {user} = useAuth()
    
    const axiosSecure = useAxiosSecure()

    const { data: userDetails = [] } = useQuery({
        queryKey: ['Details', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userDetails?email=${user?.email}`)
            return res.data
        }
    })
    console.log(userDetails);
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={3} sx={{ borderRadius: '123px' }}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        // borderRadius: '50%'
                    }}
                >
                    <img src={user?.photoURL}  alt="" />
                    {/* <Chart /> */}
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={7}>
                <Paper
                    sx={{
                        p: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Typography gutterBottom>Name: {userDetails[0]?.info?.name}</Typography>
                    <Typography gutterBottom>E-mail: {userDetails[0]?.info?.email}</Typography>
                    <Typography gutterBottom>District: {userDetails[0]?.info?.district}</Typography>
                    <Typography gutterBottom>Upazila: {userDetails[0]?.info?.upazila}</Typography>
                    <Typography gutterBottom>Blood: {userDetails[0]?.info?.blood}</Typography>
                    
                    {/* <Deposits /> */}
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={10}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/* <Orders /> */}
                    {/* {userDetails[0]?.email} */}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default UserHome;