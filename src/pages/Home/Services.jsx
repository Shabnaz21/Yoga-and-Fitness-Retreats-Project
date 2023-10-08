import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsCurrencyDollar } from "react-icons/bs";
const ServiceCard = ({ service }) => {
    const { id, name, image, price, shortDescription, buttonText } = service;
    return (
        <div>
            <div className="card max-auto w-auto bg-[#E3F2F1] shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='h-[250px] w-full rounded-lg' src={image} alt={name} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortDescription}</p>
                    <div className="card-actions items-center gap-32 justify-between">
                        <div className='flex items-center text-lg'>
                            <BsCurrencyDollar />
                            <p className='font-bold'>Price:<span className='ml-2'>{price}</span></p>
                        </div>
                        <div>
                            <Link to={`/services/${id}`}><button
                                className="btn bg-[#F1615A] text-white normal-case">{buttonText}</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;