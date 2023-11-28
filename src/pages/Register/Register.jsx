import { Avatar, Box, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import signuphi from '../../assets/Home/animations/signuphi.json'
import { useLottie } from "lottie-react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { imageUpload } from "../../Utils/imageUpload";
import useAuth from "../../Hooks/useAuth";
import { saveUser } from "../../Hooks/saveUser";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`

const Register = () => {
    const [district, setDistrict] = useState([])
    const [upazila, setUpazila] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
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

    const { createUser, updateUserProfile, logOut } = useAuth()

    // console.log('from state', selectedFile);
    // const axiosPublic = useAxiosPublic()

    // const handleFileChange = (event) => {

    //     const file = event.target.files[0];
    //     setSelectedFile(file);


    //     console.log('Selected File:', file.name);
    // };

    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [districtInput, setDistrictInput] = useState()
    // const [upazilaInput, setUpazilaInput] = useState()
    // const [blood, setBlood] = useState()
    // const [password, setPassword] = useState()
    // const [ConfrmPassword, setConfrmPassword] = useState()

    // const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target

        const status = 'active'

        const name = form.name.value
        const email = form.email.value
        const district = form.district.value
        const upazila = form.upazila.value
        const blood = form.blood.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        const img = form.img.files[0]
        const obj = { status, name, email, district, upazila, password, blood }

        try {
            const imageData = await imageUpload(img)

            const result = await createUser(email, password)

            await updateUserProfile(name, imageData?.data?.display_url)
            console.log(result);

            //todo: save data in user data
            const dbResponse = await saveUser(result?.user, obj)
            console.log(dbResponse);
            toast.success('Register Successful')
            navigate(location?.state ? location.state : '/')
            toast.warning('Please Login')
            logOut()
                .then()
                .catch()
            // result.user.email


            // get token
        }
        catch (err) {
            console.log(err);
            toast.error(err.message)
        }
        // const formData = new FormData()
        // formData.append('image', img)

        // try {
        //     const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, formData)
        //     console.log(data);
        //     if (data.status === 200) {
        //         toast.success('Image upload successfully')
        //     }
        //     setSelectedFile(data.display_url)
        // }
        // catch (err) {
        //     console.log(err);

        // }

        // console.log('form ', name, email, districtInput, upazilaInput, password, blood, ConfrmPassword);
        // console.log(formData);

        // console.log(img);

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
                            <TextField name="name" required fullWidth variant="filled" label="Your Name"></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="email" required fullWidth variant="filled" label="Email" ></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>

                            <TextField
                                required
                                fullWidth
                                id="filled-select-currency-native"
                                select
                                label="District"
                                defaultValue=""
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="filled"

                                name="district"
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

                                name="upazila"
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
                                defaultValue=""
                                SelectProps={{
                                    native: true,
                                }}
                                helperText=""
                                variant="filled"

                                name="blood"
                            >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="password" required fullWidth variant="filled" type="password" label="Password"></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="confirmPassword" required fullWidth variant="filled" type="password" label="Confirm Password" ></TextField>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button fullWidth component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
                                Upload Image
                                <VisuallyHiddenInput name="img" accept=".jpg, .png" type="file" />
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