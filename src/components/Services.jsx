import { services } from "../assets/fakedata/services"
import Card from "./BaseUI/Card"
import Heading from "./smallUI/Heading"

const Services = () => {
    return (
        <section className="bg-white py-12 my-10 min-h-screen">
            <div className="container mx-auto">
                <Heading>Services</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        services.map(({ title, description, path }, i) => <div key={i} className="col-span-1 mx-2">
                            <Card className={"bg-white p-6 flex items-center justify-center h-full flex-col text-justify"}>
                                <img className="w-3/12 mx-auto" src={path} alt={title} />
                                <h3 className="text-xl font-bold mb-4">{title}</h3>
                                <p className="text-gray-700">
                                    {description}
                                </p>
                            </Card>

                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services