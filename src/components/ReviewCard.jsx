import Card from "./BaseUI/Card"
import { FaQuoteLeft } from "react-icons/fa6"
const ReviewCard = ({ rev: { name, review, profession } }) => {
    return (
        <Card className={"bg-white p-6 h-full border-l-[5px] border-l-green-600 rounded-l-none"}>
            <FaQuoteLeft className="text-xl text-green-600"/>
            <p className="text-gray-700 my-2 text-justify ">
                {"\"" + review + "\""}
            </p>
            <hr />
            <h3 className="text-lg font-bold ">{name}</h3>
            <h3 className="text-sm text-gray-400 ">{profession}</h3>
        </Card>
    )
}

export default ReviewCard