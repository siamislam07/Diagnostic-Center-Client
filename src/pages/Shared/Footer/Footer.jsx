import { Container, Grid, Typography } from "@mui/material";


const Footer = () => {
    return (
        <Grid style={{ marginTop: '200px' }} sx={{  py: ['20%', '15%','10%'], background: ' linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(7,62,156,1) 24%, rgba(0,212,255,1) 92%)' }} >

            <Container maxWidth='xl' >
                <Grid container justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ color: 'white', fontSize: '2rem' }} textAlign='center'>
                            InnovateHealth Hub
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ color: 'white', fontSize: '2rem' }} textAlign='center'>

                        <p>&copy; 2023  All rights reserved.</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Typography sx={{ color: 'white', fontSize: '2rem' }} textAlign='center'>

                            Contact us <br />
                            +2223366
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Footer;