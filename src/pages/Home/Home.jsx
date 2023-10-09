import Banner from "./Banner";
import Contact from "./Contact";
import ServiceList from "./ServiceList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
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
                    <img className='mx-auto p-8 w-auto' src="https://i.ibb.co/cQS5Z5t/mt-2251-home-img2.png" alt="" />
                </div>
            </div>
            {/* service */}
            <ServiceList></ServiceList>
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