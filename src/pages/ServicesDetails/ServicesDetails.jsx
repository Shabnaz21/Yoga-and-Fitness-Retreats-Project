import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const allService = useLoaderData();
    console.log(allService);
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = allService.find(service => service.id === idInt)
    
    return (
        <div>
            <div className="bg-base-100">
                <div className="space-y-4">
                    <img className="w-full h-auto" src={service.image} alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 container px-8 gap-10 mx-auto mt-10 lg:mt-28">
                <div className="col-span-2 space-y-3">
                    <h2 className="text-3xl font-bold text-center mb-10">{service.name}</h2>
                    <p className="text-lg">{service.description}</p>
                    <h2 className="font-bold text-xl">Benefits:</h2>
                    <p className="text-lg">
                        <ul className="list-disc pl-5">
                            {service.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </p>
                    
                </div>
                <div className="bg-[#E3F2F1] p-5 mb-20  rounded-xl">
                    <div>
                        <h2 className="text-2xl text-center font-bold border-b-2 pb-2 border-[#0000000d]">Short Summaries</h2>
                        <p className="text-lg m-6"> {service.shortDescription} </p>
                        <h2 className="text-xl font-semibold border-b-2 pb-2 border-[#0000000d] mt-5">Price Details</h2>
                        <p className="text-lg font-semibold m-6">Price : $ {service.price} </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold border-b-2 pb-2 border-[#0000000d] mt-5">Instructor Details</h2>
                        <div className="m-6 space-y-2">
                            <p><span className="text-lg font-semibold">Instructor Name:</span> {service.instructorName} </p>
                            <p><span className="text-lg font-semibold">Instructor Experience:</span> {service.instructorExperience} </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold border-b-2 pb-2 border-[#0000000d] mt-5">Others Details</h2>
                        <div className="m-6 space-y-2">
                            <p><span className="text-lg font-semibold">Location: </span> {service.location} </p>
                            <p><span className="text-lg font-semibold">Duration of Session:</span> {service.duration}  </p>
                        </div>
                    </div>
                    <button 
                        className="btn bg-[#F1615A] p-3 text-white w-full hover:bg-slate-800 hover:text-white
                        font-semibold rounded-lg">{service.buttonText} </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;