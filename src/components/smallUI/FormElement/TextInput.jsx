
const TextInput = ({ label, errors, name, register, ...rest }) => {
    return (
        <div className="mt-4">
            <label className="font-bold">{label}</label>
            <input className={`w-full p-2 border rounded ${errors[name] ? "border-red-500" : ""}`} {...register}  {...rest} />
            {errors[name] && <p className="text-red-600">{errors[name].message}</p>}
        </div>
    )
}

export default TextInput