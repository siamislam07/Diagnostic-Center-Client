import { Box, Button, Container, CssBaseline, Grid, Paper, TextField } from "@mui/material";
import Title from "../../Shared/Title/Title";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { imageUpload } from "../../../Utils/imageUpload";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddTest = () => {
    const axiosSecure = useAxiosSecure()

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
    
    const [value, setValue] = useState(null)
    const formattedDate = value? dayjs(value).format('DD-MM-YYYY'):null
    console.log('date',formattedDate);

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!value) {
            // Handle the case where the date is not selected
            toast.error('Please select a date');
            return;
        }
        const form = e.target

        const title = form.name.value
        const details = form.details.value
        const price = form.price.value
        const date = formattedDate
        const slots = form.slots.value
        const image =  form.image.files[0]
        const imageData = await imageUpload(image)
        const imgUrl = imageData?.data?.display_url
        const testInfo ={title, details,date, price:(parseFloat(price)), slots:(parseFloat(slots)), imgUrl}

        // send to database

        const allTest = await axiosSecure.post('/allTests', testInfo)
        if (allTest.data.insertedId) {
            toast.success('Test Added Successfully')
            
        }

        console.log(testInfo);
    }


    return (
        <Grid>
            
                <Container component="main" maxWidth="sm" sx={{marginTop:'150px'}}>
                    <Title title={'Add Item'}></Title>
                    {/* <CssBaseline /> */}
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >


                        <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="name"
                                        required
                                        fullWidth
                                        // id="firstName"
                                        label="Name"
                                    // autoFoc
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Details"
                                        label="Details"
                                        name="details"
                                    // autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="price"
                                        type="number"
                                        label="Price"
                                        name="price"
                                    // autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider required dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            required
                                            label="Select Date"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                            renderInput = {(props)=> <TextField {...props}/>}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slots"
                                        type="number"
                                        label="Slots"
                                        name="slots"
                                    // autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button fullWidth required component="label" variant="outlined" sx={{paddingBottom:'12px',paddingTop:'16px' }} startIcon={<CloudUploadIcon />}>
                                        Upload Image
                                        <VisuallyHiddenInput required name="image" accept=".jpg, .png" type="file" />
                                    </Button>
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add
                            </Button>
                            {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid> */}
                        </Box>
                    </Box>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                </Container>
            
        </Grid>
    );
};

export default AddTest;