import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Title from "../../Shared/Title/Title";

const FeaturedTests = () => {
    return (
        <Grid sx={{ marginTop: '170px' }}>
            <Title color={{ color: '#023E8A' }} title={'Popular Tests'}>Popular Tests</Title>
            <Container maxWidth="lg">

                <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://th.bing.com/th/id/OIP.XAC_ssYAZzY1nQ4qGlQq7gHaD5?rs=1&pid=ImgDetMain"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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
                                image="https://th.bing.com/th/id/OIP.XAC_ssYAZzY1nQ4qGlQq7gHaD5?rs=1&pid=ImgDetMain"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <Card item sx={{ maxWidth: 345, margin: 'auto' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://th.bing.com/th/id/OIP.XAC_ssYAZzY1nQ4qGlQq7gHaD5?rs=1&pid=ImgDetMain"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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
                                image="https://th.bing.com/th/id/OIP.XAC_ssYAZzY1nQ4qGlQq7gHaD5?rs=1&pid=ImgDetMain"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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