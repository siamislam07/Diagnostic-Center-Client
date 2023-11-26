import { Avatar, Box, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import signuphi from '../../assets/Home/animations/signuphi.json'
import { useLottie } from "lottie-react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";


const Register = () => {
    const [district, setDistrict] = useState([])
    const [upazila, setUpazila] = useState([])
    // console.log(district);
    const currencies = [{ value: '', label: '' }, { value: 'A+', label: 'A+' }, { value: 'A-', label: 'A-' }, { value: 'B+', label: 'B+' }, { value: 'B-', label: 'B-' }, { value: 'AB+', label: 'AB+' }, { value: 'AB-', label: 'AB-' }, { value: 'O+', label: 'O+' }, { value: 'O-', label: 'O-' }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/districts.json')
                const data = await res.json()
                setDistrict(data)
            }
            catch (error) {
                console.log('error fetching data', error);
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/upazilas.json')
                const data = await res.json()
                setUpazila(data)
            }
            catch (error) {
                console.log('error fetching data', error);
            }
        }
        fetchData()
    }, [])

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });


    const options = {
        animationData: signuphi,
        loop: true,

    };
    const { View } = useLottie(options);

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [districtInput, setDistrictInput] = useState()
    const [upazilaInput, setUpazilaInput] = useState()
    const [blood, setBlood] = useState()
    const [password, setPassword] = useState()
    const [ConfrmPassword, setConfrmPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form ', name, email, districtInput, upazilaInput, password, blood, ConfrmPassword);
    }

    return (
        <Grid>
            <Paper elevation={20} style={{ padding: '30px 40px', width: '40%', margin: '20px auto', marginTop: '200px' }}>
                <Grid align='center' >
                    <Avatar sx={{ width: 56, height: 56 }}>
                        <span>{View}</span>
                    </Avatar>
                    <Typography variant="h5" style={{ margin: 0, marginBottom: '18px', fontWeight: 700 }}>Register</Typography>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <TextField onBlur={e => setName(e.target.value)} required fullWidth variant="filled" label="Your Name"></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField onChange={e => setEmail(e.target.value)} required fullWidth variant="filled" label="Email" ></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                required
                                fullWidth
                                id="filled-select-currency-native"
                                select
                                label="District"
                                defaultValue="A+"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="filled"
                                onChange={e => setDistrictInput(e.target.value)}
                            >
                                {district?.map((option) => (
                                    // console.log(option)
                                    <option key={option.value} value={option.value}>
                                        {option.name}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                required
                                fullWidth
                                id="filled-select-currency-native"
                                select
                                label="Upazila"
                                defaultValue=""
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="filled"
                                onChange={e => setUpazilaInput(e.target.value)}
                            >
                                {upazila?.map((option) => (
                                    // console.log(option)
                                    <option key={option.value} value={option.value}>
                                        {option.name}
                                    </option>
                                ))}
                            </TextField>


                        </Grid>


                        <Grid item xs={12} md={12}>

                            <TextField
                                required
                                fullWidth
                                id="filled-select-currency-native"
                                select
                                label="Blood Group"
                                defaultValue="A+"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="filled"
                                onChange={e => setBlood(e.target.value)}
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField onBlur={e => setPassword(e.target.value)} required fullWidth variant="filled" type="password" label="Password"></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField onBlur={e => setConfrmPassword(e.target.value)} required fullWidth variant="filled" type="password" label="Confirm Password" ></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button fullWidth component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
                                Upload Image
                                <VisuallyHiddenInput accept=".jpg, .png" type="file" />
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Button fullWidth variant="contained" type="submit"  >
                                Register
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography>Already Registered! Please <Link to="/login">Login</Link></Typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default Register;