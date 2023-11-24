import { Grid } from "@mui/material";


const Banner = () => {
    return (
        <Grid 
        id="Home"
        sx={{
            py: 28,
            backgroundImage:`linear-gradient(45deg, rgba(0,0,0,0.5), rgba())`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}
        >

        </Grid>
    );
};

export default Banner;