import aboutus from "../assets/fakedata/aboutus"
import Card from "./BaseUI/Card"
import Heading from "./smallUI/Heading"

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-16 min-h-screen w-screen flex items-center">
            <div>

                <Heading>
                    About Us
                </Heading>
                <p className="text-gray-700 mb-8">
                    We are a company that provides great products and services.
                    We strive to give our customers the best experience possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {
                        aboutus.map(({ title, motto }, i) =>
                            <div key={i} className="col-span-1">
                                <Card className={"my-3 bg-front text-center w-full py-3 px-10 h-full group cursor-pointer border space-y-3"}>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <p className="text-gray-600">
                                        {motto}
                                    </p>
                                </Card>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutUs