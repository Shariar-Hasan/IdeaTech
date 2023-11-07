import React, { useEffect, useState } from "react"
// import { FaFilter } from "react-icons/fa"
import BreadCrumb from "../components/smallUI/BreadCrumb"
import ServiceProductCard from "../components/smallUI/Cards/ServiceProductCard"
import Box from "../components/BaseUI/Box"
import servicesDataJson from "./../assets/api/serviceDatas.json"
import { Fade } from "react-swift-reveal"
import NoItemFound from "../components/smallUI/NoItemFound"
import SelectInput from "../components/smallUI/FormElement/SelectInput"
import filtering from "../assets/functions/filtering"
import sortByDataList from "../assets/fakedata/sortByDataList"
import sorting from "../assets/functions/sorting"
import Heading from "../components/smallUI/Heading"
import { SubHeading } from "../components/smallUI/SubHeading"

const Services = () => {
    const [services,
        setServices
    ] = useState(servicesDataJson);
    const [showServices, setShowServices] = useState(servicesDataJson);
    const [categoryList, setCategoryList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [selectedSortValue, setSelectedSortValue] = useState("updated_at")
    const [selectedOrderValue, setSelectedOrderValue] = useState(-1)

    // setting categories
    useEffect(() => {
        setShowServices(services)
        const newCategoryList = [...new Set(services.map(item => item.category))].map(item => ({
            title: item,
            value: item
        }))
        newCategoryList.unshift({ title: "All Category", value: "" })
        setCategoryList(newCategoryList)
    }, [services])


    // every showservice update
    useEffect(() => {
        handleSorting()
    }, [selectedOrderValue])


    // if sort by value changes
    useEffect(() => {
        const newOrderList = sortByDataList.find(item => item.value === selectedSortValue)?.order;
        setOrderList(newOrderList)
        setSelectedOrderValue(newOrderList[0].value)
        console.log(newOrderList)
    }, [selectedSortValue])

    // if order by  value change value changes
    useEffect(() => {
        const newSortedList = sorting(services, selectedSortValue, selectedOrderValue)
        setServices(newSortedList)
    }, [selectedOrderValue])



    // a function for category handling
    const handleCategoryChange = (selectedCategory) => {
        const newServiceList = filtering(services, selectedCategory, "category", "")
        setShowServices(newServiceList)
    }



    // handle sorting services 
    const handleSorting = () => {
        const newSortedList = sorting(showServices, selectedSortValue, selectedOrderValue)
        setShowServices(newSortedList)
    }

    return (
        <React.Fragment>
            <div className="container mx-auto">
                <BreadCrumb />
                <Heading>Our Services</Heading>
                <Box className={"shadow-lg"}>
                    <SubHeading>Filter Section</SubHeading>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                        <div className="col-span-1">
                            <SelectInput
                                label={"Select Category"}
                                list={categoryList}
                                handleChange={handleCategoryChange}
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectInput
                                label={'Sort By'}
                                list={sortByDataList}
                                handleChange={setSelectedSortValue}
                                defaultValue={selectedSortValue}
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectInput
                                label={'Order By'}
                                list={orderList}
                                handleChange={setSelectedOrderValue}
                                defaultValue={selectedOrderValue}
                            />
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap justify-end">
                        <button onClick={() => handleSorting()} className="px-6 py-2 bg-green-500 text-white  flex items-center rounded active:scale-[0.98]">
                            <FaFilter className="mr-2" /> Filter
                        </button>
                    </div> */}
                </Box>
            </div>
            <div className="container mx-auto">
                <Box className={"shadow-lg"}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                        {
                            showServices.length > 0 ?
                                showServices?.map((service, i) =>
                                    <div key={i} className="col-span-1">
                                        <Fade delay={i * 100}>
                                            <ServiceProductCard index={i} service={service} />
                                        </Fade>
                                    </div>)
                                : <NoItemFound>No Item Found</NoItemFound>
                        }
                    </div>
                </Box>

            </div>


        </React.Fragment>
    )
}

export default Services