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

const Home = () => {
    return (
        <div>
            {/* header */}
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/rsNKmCL/Adobe-Stock-313431040.jpg)' }}>
                <div className="hero-overlay bg-opacity-95 bg-[#745982]"></div>
                
                <div className="text-center text-neutral-content">
                    <div className='mt-20'>
                        <h1 className="mb-5 text-5xl font-bold">Elevate Your Spirit, Energize Your Body</h1>
                        <p className="mb-5"> Get Tranquil Yoga & Dynamic Fitness Retreats with Us.</p>
                        <Link to='/register'><button className="btn bg-[#F1615A] hover:text-black text-white border-0">Get Started</button></Link>
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
            {/* What Keeps Pushing Us */}
            <div className='text-center bg-[#FBF7F4] pt-10 '>
                <div className='space-y-3'>
                    <p className='text-lg uppercase font-semibold'>What Keeps Pushing Us</p>
                    <h3 className='text-3xl font-bold'>Modern Yoga for Modern Life</h3>
                    <div className='lg:mx-64 md:mx-10 text-lg space-y-4'>
                        <p>Our approach to yoga combines a diverse range of techniques, including asanas (postures) and meditation, inspired by the rich philosophies, teachings, and practices of the Yoga school. We understand that modern life often demands more than just traditional practices. Whether you seek physical fitness, mental clarity, or a spiritual journey, our offerings cater to a diverse range of needs.</p>
                        <p>Join us in the pursuit of a clear mind and a healthier body, and discover the transformative power of yoga and fitness in the modern world.</p>
                    </div>
                </div>
                <div>
                    <img className='mx-auto w-auto' src="https://i.ibb.co/cQS5Z5t/mt-2251-home-img2.png" alt="" />
                </div>
            </div>
            {/* service */}

            {/* why us */}
            <div>
                <div className="hero min-h-screen bg-[#FBF7F4]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/KDvMvwB/pexels-photo-3822720.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="ml-10 space-y-8"> 
                            <h1 className="text-5xl font-bold text-center">Why You Should Choose Us?</h1>
                            <ul>
                                <li><span className="font-bold">Expert Instructors:</span>  Our certified team provides personalized guidance tailored to your wellness journey.</li>
                                <li><span className="font-bold">Serene Locations:</span>  Experience rejuvenation in tranquil settings, from pristine beaches to lush mountains.</li>
                                <li><span className="font-bold"> Holistic Approach:</span>  Beyond yoga and fitness, we offer meditation and nutrition sessions for complete well-being.</li>
                                <li><span className="font-bold"> State-of-the-art Facilities:</span>  Enjoy top-tier facilities ensuring comfort and safety throughout your retreat.</li>
                                <li><span className="font-bold"> Community Building:</span>  Be part of a global community, forging lifelong friendships with fellow wellness enthusiasts.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;