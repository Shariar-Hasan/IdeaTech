import reviews from "../assets/fakedata/reviews"
import ReviewCard from "./ReviewCard"
import Heading from "./smallUI/Heading"

const Review = () => {
    return (
        <div className="container mx-auto px-4 py-16 min-h-screen">
            <Heading>Testimonials</Heading>
            <div className="flex flex-wrap">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 md:gap-4">
                    {reviews.slice(0, 3).map((rev, i) =>
                        <div className="col-span-1" key={i}>
                            <ReviewCard rev={rev} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Review