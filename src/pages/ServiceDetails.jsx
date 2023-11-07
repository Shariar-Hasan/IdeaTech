import { useEffect, useState } from "react"
import fetchData from "./../assets/api/serviceDatas.json"
import { useParams } from "react-router-dom"
import BreadCrumb from "../components/smallUI/BreadCrumb"
import Rating from "react-rating"
import { LiaCcApplePay, LiaStarSolid } from "react-icons/lia"
import { BsCartPlusFill, BsLinkedin, BsTwitter } from "react-icons/bs"
import moment from "moment/moment"
import ImageGallery from "../components/ImageGallery"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookSquare } from "react-icons/fa"
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
            <div className="min-h-screen flex flex-col items-center py-8">
                <div className="bg-white p-4 shadow-lg rounded-lg w-full">
                    <ImageGallery list={service.imgs} />
                    <hr />
                    <div className="my-2">
                        <span className="text-gray-400 text-sm">Last Updated : {moment(service.updated_at).fromNow()}</span>
                    </div>
                    <h1 className="text-3xl font-semibold mb-2">{service.title}</h1>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-start justify-center flex-col mb-4">
                        <span className="">
                            Category : <span className="text-white px-4 pr-9 py-1 rounded-r-xl bg-green-600">{service.category}</span>
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
                        <strong className="text-gray-700">Location: {service.location}</strong>
                    </div>
                    <div className="mb-4">
                        <strong className="text-gray-700">Tags:</strong>{" "}
                        {service.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-800 text-white py-[1px] px-2 roun ded-[2px] mr-2 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="mb-4 flex">
                        <span>Share to : </span>
                        <FcGoogle className="cursor-pointer mx-2 text-xl" />
                        <FaFacebookSquare className="text-blue-600 cursor-pointer mx-2 text-xl" />
                        <BsLinkedin className="text-blue-900 cursor-pointer mx-2 text-xl" />
                        <BsTwitter className="text-blue-600 cursor-pointer mx-2 text-xl" />

                    </div>
                    <div className="mb-4 flex justify-start">
                        <button className="flex justify-center items-center  px-4 py-2 mr-2 bg-green-600 rounded-md text-white active:scale-[.98]">
                            <LiaCcApplePay className="mr-2" /> Buy Now
                        </button>
                        <button className="flex justify-center items-center px-4 py-2 mr-2 bg-green-600 rounded-md text-white active:scale-[.98]">
                            <BsCartPlusFill className="mr-2" /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ServiceDetails