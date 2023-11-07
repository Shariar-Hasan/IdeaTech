import Rating from "react-rating"
import { LiaStarSolid } from "react-icons/lia"
import { useNavigate } from "react-router-dom"
import Card from "../../BaseUI/Card"
import moment from "moment/moment"
const ServiceProductCard = ({ service: {
    id,
    title,
    description,
    rating,
    reviews,
    isAvailable,
    price,
    category,
    updated_at,
    imgs
} }) => {
    const navigate = useNavigate()
    return (
        <Card className="bg-white overflow-hidden text-sm border border-green-600">
            <div className="py-2 px-4 relative group">
                <div className="overflow-hidden rounded-lg ">
                    <img src={imgs[0]} alt={"web pic"} className="w-full" />
                </div>
                <span className=" text-white absolute top-0 left-0 rounded-br-3xl py-1 pl-2 pr-5 bg-green-500 group-hover:min-w-[50%] transition-all origin-left duration-200 text-center font-bold">{category}</span>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {<Rating
                            readonly
                            initialRating={rating}
                            fullSymbol={<LiaStarSolid className="text-yellow-400 text-lg" />}
                            emptySymbol={<LiaStarSolid className="text-gray-300 text-lg" />}
                        />}
                    </div>
                    <span className="ml-2">{rating} / {reviews} Reviews</span>
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Price:</span>{' '}
                    <span>${price}</span>
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Updated : {moment(updated_at).fromNow()}</span>
                </div>
            </div>
            <div className="p-4 border-t border-gray-200">
                <button
                    disabled={!isAvailable}
                    className="bg-green-500 text-white rounded-md px-4 py-2 w-full"
                    onClick={() => isAvailable && navigate("/services/" + id)}
                >View Details</button>
            </div>
        </Card>


    )
}

export default ServiceProductCard