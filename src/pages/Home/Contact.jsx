const Contact = () => {
    return (
        <div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="text-3xl font-bold text-center">Contact Information</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 text-lg font-medium">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300  rounded-lg  block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-lg font-medium ">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className=" bg-[#F1615A] p-3 w-3/12 text-white hover:bg-slate-800 hover:text-white font-semibold rounded-lg">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;