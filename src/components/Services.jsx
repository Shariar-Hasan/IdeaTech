import { Fade } from "react-swift-reveal"
import { services } from "../assets/fakedata/services"
import Card from "./BaseUI/Card"
import Heading from "./smallUI/Heading"
import Divider from "./smallUI/Divider"
import { useNavigate } from "react-router-dom"

const Services = () => {
    const navigate = useNavigate()
    return (
        <section className=" py-12 my-10 min-h-screen">
            <div className="container mx-auto">
                <Heading>Services</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        services.map(({ title, description, path }, i) => <div key={i} className="col-span-1 mx-2">
                            <Fade delay={i * 100}>
                                <Card className={"bg-white p-6 flex items-center justify-center h-full flex-col text-justify"}>
                                    <img className="w-3/12 mx-auto" src={path} alt={title} />
                                    <h3 className="text-xl font-bold mb-4">{title}</h3>
                                    <p className="text-gray-700">
                                        {description}
                                    </p>
                                </Card>
                            </Fade>
                        </div>)
                    }
                </div>
                <div className="text-center mt-4">
                    <Divider>
                        <button
                            onClick={() => navigate("/services")}
                            className="px-3 py-1 bg-gray-800 text-white rounded-sm">
                            View All
                        </button>
                    </Divider>
                </div>
            </div>
        </section>
    )
}

export default Services