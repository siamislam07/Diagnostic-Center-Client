import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Shared/Title/Title";
import { useLottie } from "lottie-react";
import book from '../../assets/test-details/bookanimation.json'

const TestDetails = () => {
    const { id } = useParams()
    console.log(id);
    const [test, setTest] = useState({})
    // console.log(test);
    const [loading, setLoading] = useState(false)

    const options = {
        animationData: book,
        loop: 2,


    };
    const { View } = useLottie(options);

    useEffect(() => {
        setLoading(true)
        fetch('/allTest.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const oneData = data.find((tests) => tests.id === Number(id))
                setTest(oneData)
                setLoading(false)
            })
    }, [id])



    // if (loading) return <Typography>Please Wait Data Loading...</Typography>

    return (
        <Grid>
            <Grid

                sx={{
                    py: ['20%', '15%', '10%'],
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${test.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    overflow:'hidden',
                    objectFit:'cover'

                }}>
            </Grid>
            <Title color={{ color: '#023E8A' }} title={'Book Now'}></Title>
            <Container >
                <Grid spacing={6} container justifyContent={'center'} alignItems={'start'}>
                    <Grid item xs={12} lg={6}>
                        <span style={{ width: '10px', height: '' }}>{View}</span>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ marginTop: '30px' }}>
                        <Typography variant="h2">{test.title}</Typography>
                        <Typography variant="h4">{test.description}</Typography>
                        <Button sx={{ marginTop: '12rem' }} variant="outlined" fullWidth>Book Now</Button>
                    </Grid>
                    
                </Grid>
            </Container>
        </Grid>
    );
};

export default TestDetails;