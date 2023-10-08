import { useEffect, useState } from "react";
import ServiceCard from "./Services";

const ServiceList = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/public/services.json')
            .then(response => response.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="pt-10 text-center space-y-3">
            <h2 className="text-3xl font-bold">Find What Moves You</h2>
            <p className="text-lg pb-5">Explore this holistic retreat experience and discover the path to a healthier, more balanced life.</p>
            <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pb-20">
                {
                    services.map(item =><ServiceCard key={item.id} service={item}></ServiceCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;