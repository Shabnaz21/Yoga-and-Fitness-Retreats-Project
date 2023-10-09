import Contact from "../Home/Contact";


const Offers = () => {
    return (
        <section className="pt-10 space-y-3">
            <div className="text-center space-y-5 mb-8">
                <h1 className="text-3xl font-bold">Exclusive offer</h1>
                <p className="text-lg lg:mx-40">Begin the page with a warm and inviting introduction that highlights the unique value proposition of your exclusive offer. Mention how it provides added benefits to those who choose your retreats or services.</p>
            </div>
            {/* why  */}
            <div>
                <div className="hero pt-10 bg-[#FBF7F4]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img  src="https://i.ibb.co/KDvMvwB/pexels-photo-3822720.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="ml-10 space-y-8">
                            <h1 className="text-4xl font-bold text-center">Why Choose the Exclusive Offer?</h1>
                            <p>Highlight the benefits of choosing this exclusive offer, such as:</p>
                            <ul>
                                <li><span className="font-bold">Enhanced Retreat Experience: </span>  Explain how this offer enhances the overall experience of your retreats or services. It could include additional workshops, one-on-one sessions with instructors, or access to premium amenities.</li>
                                <li><span className="font-bold">Savings: </span> Emphasize the cost savings customers will enjoy by taking advantage of this offer compared to regular pricing.</li>
                                <li><span className="font-bold"> Personalized Experience: </span> Mention if the offer includes personalized consultations, customized fitness plans, or other tailored services.</li>
                            </ul>
                                <button className='btn bg-[#F1615A] text-white items-center normal-case w-1/3 py-4 font-bold rounded-lg
             hover:bg-slate-800 hover:text-white'>Purchase Now</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* contact */}
            <div>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default Offers;