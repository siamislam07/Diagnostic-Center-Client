import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Title from "../../Shared/Title/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";

const FeaturedTests = () => {
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState([])
    console.log(data);
    axiosPublic.get('/allTests')
    .then(res=>{
        setData(res.data)
    })
    return (
        <Grid sx={{ marginTop: '170px' }}>
            <Title color={{ color: '#023E8A' }} title={'Popular Tests'}>Popular Tests</Title>
            <Container maxWidth="lg">

                <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data[0]?.imgUrl}
                                title="Blood"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data[0]?.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data[0]?.details}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                     n</CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card item sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data[1]?.imgUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data[1]?.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data[1]?.details}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card item sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data[2]?.imgUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data[2]?.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data[2]?.details}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card item sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={data[3]?.imgUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data[3]?.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data[3]?.details}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default FeaturedTests;