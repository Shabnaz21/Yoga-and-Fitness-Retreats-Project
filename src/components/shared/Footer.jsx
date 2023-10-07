import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footer p-10 lg:pl-20 bg-[#2B3440] text-white">
                    <aside className="space-y-3 mx-auto w-auto">
                        <h3 className="text-3xl font-medium">ZenFitEscapes</h3>
                        <p className="text-left">At ZenFitEscapes, we are dedicated to providing <br /> rejuvenating Yoga and Fitness Retreats that <br />
                            nourish your mind, body, and soul.</p>
                        <div className="flex gap-3 text-xl">
                            <p><BsFacebook></BsFacebook></p>
                            <p><BsTwitter></BsTwitter></p>
                            <p><BsInstagram></BsInstagram></p>
                        </div>
                    </aside>
                    <div className="footer grid grid-cols-2 md:grid-cols-4 gap-6">
                        <nav>
                            <header className="footer-title">About</header>
                            <a className="link link-hover">Free Workshops</a>
                            <a className="link link-hover">Latest News</a>
                            <a className="link link-hover">Resources</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Product</header>
                            <a className="link link-hover">Interactive Schedule</a>
                            <a className="link link-hover">Plans & Pricing</a>
                            <a className="link link-hover">Booking & Returns</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Support</header>
                            <a className="link link-hover">Help Desk</a>
                            <a className="link link-hover">Participant Community</a>
                            <a className="link link-hover">Become a Instructor</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Contact</header>
                            <a className="link link-hover">524 Broadway , NYC </a>
                            <a className="link link-hover">+1 777 - 978 - 5570</a>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="flex items-center p-4 pl-20 bg-[#2B3440] text-white justify-between">
                    <p>Copyright © 2023 - All right reserved</p>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        Developed by: <Link to='https://github.com/Shabnaz21'>Shabnaz</Link>
                    </nav>
                </div>
            </footer>
        </section>
    );
};

export default Footer;