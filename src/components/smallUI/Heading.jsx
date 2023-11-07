
const Heading = ({ children }) => {
    return (
        <div className="text-4xl font-bold mb-12">
            <span className="relative after:absolute after:top-full after:left-0 after:bg-green-500 after:h-[5px] after:duration-300 after:w-4/12 hover:after:w-[110%] after:rounded-full">
                {children}
            </span>
        </div>
    )
}

export default Heading