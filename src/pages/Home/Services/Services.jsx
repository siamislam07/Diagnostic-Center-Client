import { Container, Grid, Paper, Typography } from "@mui/material";
import Title from "../../Shared/Title/Title";
import { HomeRepairService } from "@mui/icons-material";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import UpdateIcon from '@mui/icons-material/Update';

const Services = () => {
    return (
        <Grid sx={{ my: 12 }}>
            <Title title={"Our Services"} />
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={12} md={6} lg={3} textAlign={'center'} sx={{ transition: 'transform 0.4s' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.boxShadow = '28px 28px 50px 0 rgba(13, 39, 80, 0.16)';
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1.0)'
                            e.currentTarget.style.boxShadow = '-23px -23px 45px 0 rgba(255, 255, 255, 1)';
                        }}
                        
                    >
                        <Paper sx={{p:3,}} elevation={3}>

                            <HomeRepairService color="primary" sx={{ fontSize: '4rem',  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', }} />
                            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 600 }}>First Aid</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} textAlign={'center'} sx={{ transition: 'transform 0.4s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                        <Paper sx={{p:3, }} elevation={3}>

                            <PermPhoneMsgIcon color="primary" sx={{ fontSize: '4rem' }} />
                            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 600 }}>24x7 Call</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} textAlign={'center'} sx={{   transition: 'transform 0.4s' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)'
                            e.currentTarget.style.boxShadow = '28px 28px 50px 0 rgba(13, 39, 80, 0.16)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1.0)'
                            e.currentTarget.style.boxShadow = '-23px -23px 45px 0 rgba(255, 255, 255, 1)';
                        }}
                    >
                        <Paper sx={{p:3, }} elevation={3}>
                            <ThumbUpAltIcon color="primary" sx={{ fontSize: '4rem' }} />
                            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 600 }}>QualityFull Result</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} textAlign={'center'} sx={{  transition: 'transform 0.4s' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                        <Paper sx={{p:3, }} elevation={3}>
                            <UpdateIcon color="primary" sx={{ fontSize: '4rem' }} />
                            <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 600 }}>Up To Date</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Services;