import { useEffect, useState } from "react";
import DiscountCard from "./DiscountCard";
import useAxios from "../../Dashboard/User/useAxios";

const Discount = () => {
    const [discount, setDiscount] = useState([]);
    const axios = useAxios()
    useEffect(() => {
        axios.get('/offers')
            .then(res => {
                setDiscount(res?.data);
            })
    }, [axios])
    return (
        <div>
            <div className="text-center space-y-5 mt-10">
                <h2 className="text-3xl mb-10 font-bold">Discount or Special Package</h2>

                <div className="grid container mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6 pb-20">
                    {
                        discount.map(item => <DiscountCard key={item.id}
                            discount={item}
                        >
                        </DiscountCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Discount;