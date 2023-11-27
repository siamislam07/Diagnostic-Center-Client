
import { Grid, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const Banner = () => {
    return (
        <Grid
            id="Home"

            sx={{
                py: ['20%', '15%', '10%'],

                backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(/image/banner.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}>
            <Container id="Home" sx={{ height: '100%',  }} maxWidth="xl">
                <Grid height={'100%'}  container="xl" justifyContent={'start'} alignItems={'start'}>
                    <Grid item xs={12} md={8} >
                        <Typography gutterBottom sx={{ fontWeight: 600 }} variant="h1" color="white">
                            Trusted Diagnostic Center
                        </Typography>
                        <Typography sx={{ fontSize: '1.25rem' }} color="white">
                            Trusted Dental Center 
                        </Typography>
                        <Typography gutterBottom sx={{ fontSize: '1.25rem' }} color="white">
                            Coupon Code : <mark style={{ padding: '2px', borderRadius: '6px' }}>DOC20</mark> <span style={{ fontSize: '40px', color: 'red' }}>20%</span>
                        </Typography>

                        <Link to="/all-tests"><Button variant="contained" endIcon={<SendIcon />}>
                            All Tests
                        </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>


        </Grid>
    );
};

export default Banner;