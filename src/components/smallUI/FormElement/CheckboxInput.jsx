
const CheckboxInput = ({ label, errors, name, register, ...rest }) => {
    return (
        <div className="mt-4">
            <div className="flex flex-wrap items-center">
                <input type="checkbox" className={`p-2 mr-2 border rounded ${errors[name] ? "border-red-500" : ""}`} {...register}  {...rest} />
                <label className="font-bold">{label}</label>
            </div>
            {errors[name] && <p className="text-red-600">{errors[name].message}</p>}
        </div>
    )
}

export default CheckboxInput