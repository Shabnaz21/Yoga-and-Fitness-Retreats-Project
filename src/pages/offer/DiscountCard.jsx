import PropTypes from 'prop-types';
const DiscountCard = ({ discount }) => {
    const { Offer_Title, Offer_Description, Value_Emphasized,
        Call_to_Action, Discounted_Price, Original_Price, } = discount;
    return (
        <div>
            <div className="card gap-5 w-auto shadow-xl rounded-2xl bg-[#E3F2F1] p-4 mx-4">
                <h2 className='text-xl text-center mt-5 font-semibold'>{Offer_Title}</h2>
                <div className="pl-5 space-y-4 h-96 pt-4 text-left">
                    <p><span className="text-lg font-semibold" >Offer Description:</span> {Offer_Description} </p>
                    <p><span className="text-lg font-semibold" >Value Emphasized:</span> {Value_Emphasized} </p>
                    <p><span className="text-lg font-semibold" >Discounted Price:</span> {Discounted_Price} </p>
                    <p><span className="text-lg font-semibold" >Original Price: </span> {Original_Price} </p>
                </div>
                <div className='text-center'>
                    <button className='btn bg-[#F1615A] text-white items-center normal-case w-1/2 py-4 font-bold rounded-lg
             hover:bg-slate-800 hover:text-white'>{Call_to_Action}</button>
                </div>
            </div>
        </div>
    );
};

DiscountCard.propTypes = {
    discount: PropTypes.object
}

export default DiscountCard;