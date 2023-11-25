import { Typography } from "@mui/material";

const Title = ({title}) => {
    return (
        <Typography variant="h3" align="center" color="seagreen" sx={{my:6, fontWeight:600}} >
            {title}
        </Typography>
    );
};

export default Title;