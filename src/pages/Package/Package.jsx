import { useEffect, useState } from "react";
import PackageCard from "./Packagecard";
import useAxios from "../../Dashboard/User/useAxios";

const Package = () => {
    const [packages, setPackages] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        axios('/packages')
            .then(response =>
                setPackages(response?.data))
    }, [axios])

    return (
        <div className="pt-10 space-y-3 mx-5">
            <div className="text-center space-y-5 mb-8">
                <h1 className="text-3xl font-bold">Pricing & Packages</h1>
                <p className="text-lg lg:mx-40">Welcome to our Yoga and Fitness Retreats Pricing & Packages page! We offer a range of packages designed to meet your wellness needs and preferences. Whether you are a beginner looking to kickstart your fitness journey or an experienced yogi seeking a rejuvenating retreat, we have something for everyone. Explore our offerings below:</p>
            </div>
            <div className="grid container mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6 pb-20">
                {
                    packages.map(item=><PackageCard key={item._id} packPrice={item}></PackageCard>)
                }
        </div>
        </div>
    );

};

export default Package;