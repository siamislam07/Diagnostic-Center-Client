import { Typography } from "@mui/material";

const Title = ({title, color}) => {
    return (
        <Typography variant="h3" align="center" color={color} sx={{my:6, fontWeight:600}} >
            {title}
        </Typography>
    );
};

export default Title;