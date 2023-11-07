import Card from "./BaseUI/Card"

const ReviewCard = ({ rev: { name, review, profession } }) => {
    return (
        <Card className={"bg-white p-6 h-full"}>
            <p className="text-gray-700 my-2 text-justify">
                {"\"" + review + "\""}
            </p>
            <hr />
            <h3 className="text-lg font-bold ">{name}</h3>
            <h3 className="text-sm text-gray-400 ">{profession}</h3>
        </Card>
    )
}

export default ReviewCard