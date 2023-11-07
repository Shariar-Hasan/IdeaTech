
const Card = ({ className, children }) => {
    return (
        <div className={`rounded-md shadow-md hover:shadow-none duration-100 ${className}`}>{children}</div>
    )
}

export default Card