
const Box = ({ className, children, ...rest }) => {
    return (
        <div className={`rounded-lg border bg-front p-6 my-5 ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Box