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
            </div>
            <Marquee
                pauseOnClick
                direction="left"
                speed={10}
                delay={1}
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
            >
                {
                    brands.sort(() => Math.random() - .5).map((brand, i) => <BrandCard key={i} brand={brand} />)
                }
            </Marquee>
            <Marquee
                pauseOnClick
                direction="left"
                speed={8}
                delay={1}
            >
                {
                    brands.sort(() => Math.random() - .5).map((brand, i) => <BrandCard key={i} brand={brand} />)
                }
            </Marquee>
        </div>

    )
}

export default Brands