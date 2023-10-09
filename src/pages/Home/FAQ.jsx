import AccordionItem from "./AccordionItem";

const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-[#F1615A]">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What is included in the retreat package?"
                            text="Our retreat packages vary depending on your choice, but they typically include daily yoga and meditation sessions, accommodation, meals, guided hikes, group workshops, and wellness activities. Please check the specific package details for a comprehensive list of inclusions."
                        />
                        <AccordionItem
                            header="Can I customize my retreat experience?"
                            text="Absolutely! We understand that everyone's wellness needs are unique. You can tailor your retreat experience by choosing from our different package options and adding on additional services or workshops to create a personalized itinerary that suits you."
                        />
                        <AccordionItem
                            header="Are the retreats suitable for beginners?"
                            text="Yes, our retreats are designed to cater to individuals of all levels, from beginners to experienced practitioners. Our instructors are skilled at adapting sessions to accommodate varying skill levels and ensure everyone feels comfortable and supported."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What is the duration of the retreats?"
                            text="The duration of our retreats varies depending on the package you select. We offer options ranging from weekend getaways to extended 30-day retreats. Check the details of each package for specific duration information."
                        />
                        <AccordionItem
                            header="Is there a minimum age requirement for participants?"
                            text="We welcome participants of all ages, but some retreats may have age restrictions or recommendations. Please refer to the individual retreat descriptions for any age-related guidelines or contact us for clarification."
                        />
                        <AccordionItem
                            header="What is your cancellation policy?"
                            text="Our cancellation policy depends on the specific retreat package you choose. Generally, we offer flexible cancellation options with varying refund percentages based on the notice period. Please review the terms and conditions associated with your selected package for detailed cancellation information."
                        />
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Accordion;
