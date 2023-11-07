import { BsFillArrowUpCircleFill } from "react-icons/bs"
const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <span className="z-100 fixed bottom-[20px] right-[20px] text-[20px] md:text-[45px] cursor-pointer" onClick={handleScrollToTop}>
            <BsFillArrowUpCircleFill />
        </span>
    )
}

export default ScrollToTop