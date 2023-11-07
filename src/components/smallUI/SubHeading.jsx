
export const SubHeading = ({ children }) => {
    return (
        <h2 className="text-center text-2xl">
            <span className="relative after:absolute after:top-[110%] after:-left-[12px] after:w-[120%] after:h-[5px] after:bg-gradient-to-r after:to-green-600 after:from-green-400 after:rounded-full">
                {children}
            </span>
        </h2>
    )
}
