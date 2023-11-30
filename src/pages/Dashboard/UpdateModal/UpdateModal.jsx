/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import { imageUpload } from '../../../Utils/imageUpload';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid green',
    boxShadow: 24,
    p: 4,

};

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


const UpdateModal = ({ open, handleClose, selectedTest,handleRefetch }) => {

    // console.log('in the modal',selectedTest._id);
    
    
    const axiosSecure = useAxiosSecure()

    const [value, setValue] = React.useState(null)
    const formattedDate = value? dayjs(value).format('DD-MM-YYYY'):null
    // console.log('date',formattedDate);

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

        const allTest = await axiosSecure.patch(`/allTests/${selectedTest?._id}`, testInfo)
        if (allTest.data.modifiedCount > 0) {
            toast.success('Test Update Successfully')
            handleRefetch()
        }

        console.log(testInfo);
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Box  component="form" onSubmit={handleSubmit} sx={style}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                defaultValue={selectedTest?.title}
                                    name="name"
                                    required
                                    fullWidth
                                    // id="firstName"
                                    placeholder="Name"
                                // autoFoc
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                defaultValue={selectedTest?.details}
                                    required
                                    fullWidth
                                    id="Details"
                                    label="Details"
                                    name="details"
                                // autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                defaultValue={selectedTest?.price}
                                    required
                                    fullWidth
                                    id="price"
                                    type="number"
                                    label="Price"
                                    name="price"
                                // autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <LocalizationProvider required dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    defaultValue={selectedTest?.date}
                                        required
                                        label="Select Date"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                        renderInput={(props) => <TextField {...props} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    defaultValue={selectedTest?.slots}
                                    id="slots"
                                    type="number"
                                    label="Slots"
                                    name="slots"
                                // autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button fullWidth defaultValue={selectedTest?.imgUrl} required component="label" variant="outlined" sx={{ paddingBottom: '12px', paddingTop: '16px' }} startIcon={<CloudUploadIcon />}>
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
                            onClose={handleClose}
                        >
                            Update
                        </Button>
                        
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateModal;