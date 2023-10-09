import Contact from "../Home/Contact";
import Discount from "./Discount";

const Offers = () => {

    return (
        <section className="space-y-3">
            {/* why  */}
            <div>
                <div className="hero p-10 bg-[#FBF7F4]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/KDvMvwB/pexels-photo-3822720.jpg" className="max-w-sm 
                        rounded-lg shadow-2xl" />
                        <div className="ml-10 space-y-8 text-lg">
                            <h1 className="text-4xl font-bold text-center">Why Choose the Exclusive Offer?</h1>
                            <p>Highlight the benefits of choosing this exclusive offer, such as:</p>
                            <ul className="space-y-3">
                                <li><span className="font-bold">Enhanced Retreat Experience: </span>  Explain how this offer enhances the overall experience of your retreats or services. It could include additional workshops, one-on-one sessions with instructors, or access to premium amenities.</li>
                                <li><span className="font-bold">Savings: </span> Emphasize the cost savings customers will enjoy by taking advantage of this offer compared to regular pricing.</li>
                                <li><span className="font-bold"> Personalized Experience: </span> Mention if the offer includes personalized consultations, customized fitness plans, or other tailored services.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* discount */}
            <Discount></Discount>
            {/* contact */}
            <div>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default Offers;