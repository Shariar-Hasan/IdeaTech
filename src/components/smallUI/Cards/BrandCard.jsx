
const BrandCard = ({ brand: { link, title } }) => {
    return (
        <span>
            <img className="mx-10 my-5 p-5  hover:shadow-md rounded-full border border-transparent hover:border-gray-300 hover:bg-front duration-100 cursor-pointer" src={link} alt={title} />
        </span>
    )
}

export default BrandCard