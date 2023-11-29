import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Recommendation.css';


import { Container, Grid, Typography } from "@mui/material";

import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from '../../../assets/home/slider1.webp'
import slide2 from '../../../assets/home/slider2.jpg'
import slide3 from '../../../assets/home/slider3.jpg'
import slide4 from '../../../assets/home/slider6.jpg'
import slide5 from '../../../assets/home/slider5.png'

const Recommendation = () => {
    const [recommendations, setRecommendations] = useState()
    console.log(recommendations);
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

    const responsiveBreakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };



    return (
        <Grid sx={{
            position: '', marginTop: '170px', py: 7,
            backgroundImage: `radial-gradient(#a4aa79 2px, transparent 12px)`,
            backgroundSize: '32px 32px',
            backgroundAttachment: 'fixed',
            backgroundColor: '#849643',
        
        }}>
            <Typography variant="h3" align="center" color={'white'} sx={{ my: 6, fontWeight: 800 }} >
                Personalized Recommendation

            </Typography>
            <Container maxWidth="lg" >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={responsiveBreakpoints}
                >
                    <SwiperSlide className="swiper-slide">
                        <img className="swiper-image" src={slide1} alt="Recommendation_Slider" />
                        <div className="slide-overlay">
                            <Typography gutterBottom variant="h6" className="slide-text">{recommendations?.[0]?.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }} className="slide-description">{recommendations?.[0]?.content}</Typography>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img className="swiper-image" src={slide2} alt="Recommendation_Slider" />
                        <div className="slide-overlay">
                            <Typography gutterBottom variant="h6" className="slide-text">{recommendations?.[1]?.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }} className="slide-description">{recommendations?.[1]?.content}</Typography>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img className="swiper-image" src={slide3} alt="Recommendation_Slider" />
                        <div className="slide-overlay">
                            <Typography gutterBottom variant="h6" className="slide-text">{recommendations?.[2]?.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }} className="slide-description">{recommendations?.[2]?.content}</Typography>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img className="swiper-image" src={slide4} alt="Recommendation_Slider" />
                        <div className="slide-overlay">
                            <Typography gutterBottom variant="h6" className="slide-text">{recommendations?.[3]?.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }} className="slide-description">{recommendations?.[3]?.content}</Typography>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <img className="swiper-image" src={slide5} alt="Recommendation_Slider" />
                        <div className="slide-overlay">
                            <Typography gutterBottom variant="h6" className="slide-text">{recommendations?.[4]?.title}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }} className="slide-description">{recommendations?.[4]?.content}</Typography>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </Grid>
    );
};

export default Recommendation;