// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import './styles.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/rsNKmCL/Adobe-Stock-313431040.jpg)' }}>
                <div className="hero-overlay bg-opacity-95 bg-[#745982]"></div>
                <div className="text-center text-neutral-content">
                    <div className='mt-20'>
                        <h1 className="mb-5 text-5xl font-bold">Elevate Your Spirit, Energize Your Body</h1>
                        <p className="mb-5"> Get Tranquil Yoga & Dynamic Fitness Retreats with Us.</p>
                        <Link to='/register'><button className="btn bg-[#F1615A] hover:bg-slate-800 hover:text-white text-white border-0">Get Started</button></Link>
                    </div>
                    <div className='mx-auto w-auto container hidden md:block'>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/mbgT0pR/pexels-photo-3823185.webp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/X8tsxmq/pexels-photo-8032834.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/KWCypnN/pexels-photo-6493593.webp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/rFJ7KMK/pexels-photo-4662488.jpg " />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/qCJ0Wr1/pexels-photo-8436691.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='rounded-3xl' src="https://i.ibb.co/QnjYZtC/pexels-photo-3822225.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;