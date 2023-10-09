import PropTypes from 'prop-types';
const PackageCard = ({ packPrice }) => {
    const { name, duration, accommodation, workshops, price, yogaSessions, meals, activities, } = packPrice;
    return (
        <div>
            <div className="card gap-5 w-auto shadow-xl rounded-2xl bg-[#f0eae6] p-4">
                <h2 className='text-2xl text-center mt-5 font-semibold'>{name}</h2>
                <div className="pl-5 space-y-2 h-96 pt-4">
                    <p><span className="text-lg font-semibold" >Duration:</span> {duration} </p>
                    <p><span className="text-lg font-semibold" >Accommodation:</span> {accommodation} </p>
                    <p><span className="text-lg font-semibold" >Workshops:</span> {workshops } </p>
                    <p><span className="text-lg font-semibold" >Yoga sessions:</span> {yogaSessions} </p>
                    <p><span className="text-lg font-semibold" >Meals:</span> {meals} </p>
                    <p><span className="text-lg font-semibold" >Activities:</span> {activities} </p>
                    <p><span className="text-lg font-semibold" >Price: </span> {price} </p>
                </div>
                <div className='text-center'>
                    <button className='btn bg-[#F1615A] text-white items-center normal-case w-1/2 py-4 font-bold rounded-lg
             hover:bg-slate-800 hover:text-white'>Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

PackageCard.propTypes = {
    packPrice: PropTypes.object
}
export default PackageCard;