import { Fade } from "react-swift-reveal"
import plans from "../assets/fakedata/plans"
import { AiFillCheckSquare } from "react-icons/ai"
const Plans = () => {
    return (
        <div className="bg-front py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-bold mb-10">
                    Pricing Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map(({ name, price, features }, index) => (
                        <Fade key={index} delay={index * 150}>
                            <div
                                className="col-span-1">
                                <div className="bg-green-600  rounded-lg duration-100  hover:-translate-y-10 hover:shadow-lg">
                                    <div
                                        className="bg-white rounded-lg rounded-tl-[100px] shadow p-6 text-center"
                                    >
                                        <h3 className="text-xl font-bold mb-4">
                                            {name}
                                        </h3>
                                        <p className="text-4xl font-bold mb-6">
                                            {price} / Month
                                        </p>
                                        <hr />
                                        <ul className="list-disc list-inside text-leftpx-4">
                                            {features.map((feature, i) => (
                                                <li key={i} className="flex items-center my-4"> <AiFillCheckSquare className="text-lg text-green-600 mr-4" />{feature}</li>
                                            ))}
                                        </ul>
                                        <div className="text-center mt-6">
                                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700">
                                                {index === 0 ? "🆓Start free Trial" : "💳Choose Plan"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans