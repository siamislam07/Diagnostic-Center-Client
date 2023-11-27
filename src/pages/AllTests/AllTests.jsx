import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

import img from "../../assets/all-test/book-test-banner2.png"
import Title from "../Shared/Title/Title";
import { useEffect, useState } from "react";
const AllTests = () => {
    const [testData, setTestData] = useState([])
    // console.log(testData);
    useEffect(() => {
        fetch('./allTest.json')
            .then(res => res.json())
            .then(data => setTestData(data))
    }, [])


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
            <Title color={{ color: '#023E8A' }} title={'Popular Tests'}>Popular Tests</Title>
            <Container maxWidth="lg">

                <Grid container spacing={3}  >
                    {testData?.map(test => (
                        // console.log(test.title)
                        
                        <Grid  key={test.id} item xs={12} md={6} lg={3} >
                            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={test.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {test.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        {test.description}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        Date: {test.availableDate.date}
                                    </Typography>
                                    <Typography  variant="" color="text.secondary">
                                        Slots: {test.availableDate.slots}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="small" variant="outlined">Details</Button>
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