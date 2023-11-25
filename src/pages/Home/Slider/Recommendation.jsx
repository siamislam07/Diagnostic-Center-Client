import { useEffect, useState } from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from "../../Shared/Title/Title";
import { Container, Grid } from "@mui/material";

const Recommendation = () => {
    const [recommendations, setRecommendations] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/slider.json')
                const data = await res.json()
                setRecommendations(data)
            }
            catch (error) {
                console.log('error fetching data', error);
            }
        }
        fetchData()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Grid sx={{ marginTop: '170px' }}>
            <Title title={'Personalized Recommendation'} />
            <Container maxWidth="lg" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                <Slider {...settings}>
                    {recommendations?.map((recommendation) => (
                        <div key={recommendation.id} style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                        <h3 style={{ color: '#333' }}>{recommendation.title}</h3>
                        <p style={{ color: '#666' }}>{recommendation.content}</p>
                        <p style={{ color: '#888' }}>Author: {recommendation.author}</p>
                        <p style={{ color: '#888' }}>Date: {recommendation.date}</p>
                    </div>
                    ))}
                </Slider>
            </Container>
        </Grid>
    );
};

export default Recommendation;