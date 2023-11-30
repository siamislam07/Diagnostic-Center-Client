import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

import img from "../../assets/all-test/book-test-banner2.png"
import Title from "../Shared/Title/Title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const AllTests = () => {
    const [testData, setTestData] = useState([])
    const axiosPublic = useAxiosPublic()
    // console.log(testData);
    useEffect(() => {
        axiosPublic.get('/allTests')
        .then(response => setTestData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, [axiosPublic])


    return (
        <Grid>
            <Grid

                sx={{
                    py: ['20%', '15%', '10%'],
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${img})`,
                    backgroundPosition: '',
                    backgroundSize: 'cover',

                }}>
            </Grid>
            <Title color={{ color: '#023E8A' }} title={'Popular Tests'}></Title>
            <Container maxWidth="lg">

                <Grid container spacing={3}  >
                    {testData?.map(test => (
                        // console.log(test.title)

                        <Grid key={test.id} item xs={12} md={6} lg={3} >
                            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={test?.imgUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {test?.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        {test?.details}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        Date: {test?.date}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        Slots: {test?.slots}
                                    </Typography>
                                    <Typography variant="" color="text.secondary">
                                        Price: {test?.price}$
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Link to={`/details/${test?._id}`}>
                                        <Button size="small" variant="outlined">Details</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Grid>
    );
};

export default AllTests;