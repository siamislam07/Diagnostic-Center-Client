import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from "@mui/material";
import Title from "../../Shared/Title/Title";
import { Start } from "@mui/icons-material";
import { useLottie } from "lottie-react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import accordi from '../../../assets/Home/animations/accordi.json'

const About = () => {

    const accordionData = [
        {
            title: 'What is HealthHub?',
            description: 'HealthHub is a comprehensive platform dedicated to fostering a healthier lifestyle. We provide a range of services and resources to empower individuals on their journey to well-being.',
        },
        {
            title: 'How does HealthHub work?',
            description: 'HealthHub offers personalized health recommendations, featured tests, and a wealth of health-related information. Our goal is to make health information accessible and actionable, promoting informed decision-making.',
        },
        {
            title: 'Is the information on HealthHub trustworthy?',
            description: 'Absolutely. We prioritize accuracy and reliability. Our content is curated in collaboration with healthcare professionals, ensuring that you receive credible and up-to-date information.',
        },
        {
            title: 'How can I engage with HealthHub?',
            description: 'We encourage you to become an active part of our community. Join discussions, share your health experiences, and explore the various resources available. Health professionals are also welcome to contribute their expertise.',
        },
    ];


    const options = {
        animationData: accordi,
        loop: true,

    };

    const { View } = useLottie(options);

    return (
        <Grid id="FAQ" sx={{ marginTop: '170px' }}>
            <Title title={'FAQ'}></Title>
            <Container>
                <Grid spacing={6} container justifyContent={'center'} alignItems={'start'}>
                    <Grid item xs={12} lg={6}>
                        <span style={{ width: '20px' }}>{View}</span>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{marginTop: '30px'}}>
                        {accordionData.map((item, index) => (
                            <Accordion elevation={3} sx={{my: 3, borderRadius: '12px', }} key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography>{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.description}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default About;