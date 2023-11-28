import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useLottie } from "lottie-react";
import { useState } from "react";
import WatchingYou, { useWatchingYou } from 'react-watching-you';

import loginicon from '../../assets/Home/animations/loginicon.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {login} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const options = {
        animationData: loginicon,
        loop: true,

    };
    const { View } = useLottie(options);

    const handleSubmit = e => {
        e.preventDefault()
        console.log('from logijn', email, password);
        login(email, password)
        .then(result=>{
            const user = result.user
            console.log(user);
            toast.success("Login successful! Welcome back! 🎉")
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    return (
        <Grid>
            <Paper elevation={20} style={{ padding: '30px 40px', width: '30%', margin: '20px auto', marginTop: '200px' }}>
                <Grid align='center' >
                    <Avatar sx={{ width: 70, height: 68 }}>
                        <span>{View}</span>
                    </Avatar>
                    <Typography variant="h5" style={{ margin: 0, marginBottom: '18px', fontWeight:700 }}>Login</Typography>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={12}>
                            <TextField onChange={e => setEmail(e.target.value)} required fullWidth variant="filled" label="Email" ></TextField>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <TextField onBlur={e => setPassword(e.target.value)} required fullWidth variant="filled" type="password" label="Password"></TextField>
                        </Grid>

                        <Grid item xs={12} md={12} >
                            <Button fullWidth variant="contained" type="submit" >
                                Login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography>Do not Register yet! Please <Link to="/register">Register</Link></Typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>



            
        </Grid>
    );
};

export default Login;