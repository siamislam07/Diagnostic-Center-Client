import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Shared/Title/Title";
import { useLottie } from "lottie-react";
import book from '../../assets/test-details/bookanimation.json'
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TestDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const [test, setTest] = useState({})
    const { user } = useAuth()
    // console.log(test);
    const axisSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)

    const options = {
        animationData: book,
        loop: 2,


    };
    const { View } = useLottie(options);

    const handleBookNow = () => {
        const testItem ={
            testId: test?._id,
            email: user?.email,
            title: test?.title,
            date : test?.date,
            details: test?.details
        }
        axisSecure.post('/userTest', testItem)
        .then(res=>{
            // console.log(res.data);
            if (res.data.insertedId) {
                toast.success('Booked Successfully, Please Check you dashboard')
            }
        })
        // console.log(testItem);
    }

    useEffect(() => {
        setLoading(true)
        axisSecure.get('/allTests')
            
            .then(res => {
                // console.log(data);
                const oneData = res.data.find((tests) => tests._id === (id))
                setTest(oneData)
                setLoading(false)
            })
    }, [id, axisSecure])



    // if (loading) return <Typography>Please Wait Data Loading...</Typography>

    return (
        <Grid>
            <Grid

                sx={{
                    py: ['20%', '15%', '10%'],
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${test?.imgUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    objectFit: 'cover'

                }}>
            </Grid>
            <Title color={{ color: '#023E8A' }} title={'Book Now'}></Title>
            <Container >
                <Grid spacing={6} container justifyContent={'center'} alignItems={'start'}>
                    <Grid item xs={12} lg={6}>
                        <span style={{ width: '10px', height: '' }}>{View}</span>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ marginTop: '30px' }}>
                        <Typography variant="h2">{test?.title}</Typography>
                        <Typography variant="h4">{test?.details}</Typography>
                        <Button onClick={handleBookNow} sx={{ marginTop: '12rem' }} variant="outlined" fullWidth>Book Now</Button>
                    </Grid>
                    
                </Grid>
            </Container>
        </Grid>
    );
};

export default TestDetails;