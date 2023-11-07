
const Divider = ({ children }) => {
    return (
        <span className="relative px-2
        after:absolute after:top-[50%] after:left-full after:h-[2px] after:w-[70px] after:bg-gray-500
        before:absolute before:top-[50%] before:right-full before:h-[2px] before:w-[70px] before:bg-gray-500
        ">{children}</span>
    )
}

export default Divider