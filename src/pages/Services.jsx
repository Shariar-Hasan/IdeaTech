import React, { useEffect, useState } from "react"
import BreadCrumb from "../components/smallUI/BreadCrumb"
import ServiceProductCard from "../components/smallUI/Cards/ServiceProductCard"
import Box from "../components/BaseUI/Box"
import servicesDataJson from "./../assets/api/serviceDatas.json"
import { Fade } from "react-swift-reveal"

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(servicesDataJson)
    }, [])
    return (
        <React.Fragment>
            <BreadCrumb />
            <div className="container mx-auto">
                <Box>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                        {
                            services.length > 0 ?
                                services.map((service, i) =>
                                    <div key={i} className="col-span-1">
                                        <Fade delay={i * 100}>
                                            <ServiceProductCard index={i} service={service} />
                                        </Fade>
                                    </div>)
                                : <div>loading . . . . .</div>
                        }
                    </div>
                </Box>

            </div>


        </React.Fragment>
    )
}

export default Services