"use client";

import { Autoplay, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    const imageSrcs = [
        "/my-image-4.jpg",
        "/my-image-5.jpg",
        "/my-image-6.jpg",
        "/my-image-7.jpg",
        "/my-image-8.jpg",
        "/my-image-9.jpg"
    ];
    return (
        <Box className="flex w-5/6">
            <Swiper
                spaceBetween={-30}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                initialSlide={1}
                centeredSlides
                modules={[Navigation, Autoplay]}
                navigation
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    }
                }}
                className='w-screen m-5'

            >
                {imageSrcs.map((src, i) => (

                    <SwiperSlide key={i} style={{ display: "flex" }} className='items-center justify-center'>
                        {({ isActive }) => (
                            <Image alt="slider-image" src={src} className={`${isActive ? "w-full" : "w-2/3 blur-sm"} duration-200`} width={192} height={108} />
                        )}
                    </SwiperSlide>

                ))}
            </Swiper>
        </Box>
    );
};

export default Carousel;

