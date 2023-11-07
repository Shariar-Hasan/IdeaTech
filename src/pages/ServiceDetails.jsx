import { useEffect, useState } from "react"
import fetchData from "./../assets/api/serviceDatas.json"
import { useParams } from "react-router-dom"
import BreadCrumb from "../components/smallUI/BreadCrumb"
import Rating from "react-rating"
import { LiaStarSolid } from "react-icons/lia"
import moment from "moment/moment"
const ServiceDetails = () => {
    const [service, setService] = useState(null)
    const { sid } = useParams()
    useEffect(() => {
        const currentServiceData = fetchData.find(item => item.id == sid)
        console.log(currentServiceData, fetchData)
        setService(currentServiceData)
    }, [sid])
    if (!service) {
        return <div className="container mx-auto">
            <div>Loading . . . .</div>
        </div>
    }
    return (
        <div className="container mx-auto">
            <BreadCrumb />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
                <div className="bg-white p-4 shadow-lg rounded-lg max-w-2xl w-full">
                    <h1 className="text-3xl font-semibold mb-2">{service.title}</h1>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-start justify-center flex-col mb-4">
                        <span className="">
                            Category : {service.category}
                        </span>
                        <span>
                            {service.isAvailable ? (
                                <span className="text-green-500 ">Available</span>
                            ) : (
                                <span className="text-red-500">Not Available</span>
                            )}
                        </span>
                    </div>
                    <div className="flex items-center mb-4">
                        {<Rating
                            readonly
                            initialRating={service.rating}
                            fullSymbol={<LiaStarSolid className="text-yellow-400 text-lg" />}
                            emptySymbol={<LiaStarSolid className="text-gray-300 text-lg" />}
                        />}
                        <span className="text-gray-700">{service.rating.toFixed(1)}</span>
                        <span className="text-gray-500 ml-2">({service.reviews} Reviews)</span>
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Price: ${service.price}</strong>
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Tags:</strong>{" "}
                        {service.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-500 text-white py-[1px] px-2 rounded-[2px] mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <hr />
                    <div className="mb-4">
                        <span className="text-gray-400 text-sm">Last Updated : {moment(service.updated_at).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ServiceDetails