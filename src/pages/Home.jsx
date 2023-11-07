import React from "react"
import SearchSection from "../components/SearchSection"
import Review from "../components/Review"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import Brands from "../components/Brands"
import Plans from "../components/Plans"

const Home = () => {

    return (
        <React.Fragment>
            <SearchSection />
            <AboutUs />
            <Services />
            <Plans />
            <Brands />
            <Review />
        </React.Fragment>
    )
}

export default Home