import Marquee from "react-fast-marquee"
import { brands } from "../assets/fakedata/brands"
import Heading from "./smallUI/Heading"
import BrandCard from "./smallUI/Cards/BrandCard"

const Brands = () => {
    return (
        <div className='md:min-h-screen h-auto py-10'>
            <div className="container mx-auto">
                <Heading>
                    Our Clients
                </Heading>
                <Marquee
                    pauseOnClick
                    direction="left"
                    speed={10}
                    delay={1}
                    gradientWidth={100}
                    gradient
                >
                    {
                        brands.sort(() => Math.random() - .5).map((brand, i) => <BrandCard key={i} brand={brand} />)
                    }
                </Marquee>
                <Marquee
                    pauseOnClick
                    direction="right"
                    speed={15}
                    delay={5}
                    gradient
                    gradientWidth={100}
                >
                    {
                        brands.sort(() => Math.random() - .5).map(({ link, title }, i) => <span key={i}>
                            <img className="mx-10 my-5 p-5  hover:shadow-md rounded-full border border-transparent hover:border-gray-200 duration-100" src={link} alt={title} />
                        </span>)
                    }
                </Marquee>
                <Marquee
                    pauseOnClick
                    direction="left"
                    speed={8}
                    delay={1}
                    gradient
                    gradientWidth={100}
                >
                    {
                        brands.sort(() => Math.random() - .5).map(({ link, title }, i) => <span key={i}>
                            <img className="mx-10 my-5 p-5 hover:shadow-md rounded-full border border-transparent hover:border-gray-200 duration-100" src={link} alt={title} />
                        </span>)
                    }
                </Marquee>
            </div>

        </div>
    )
}

export default Brands