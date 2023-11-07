
const SelectInput = ({ list = [], label = "",defaultValue, handleChange }) => {
    return list.length > 0 && (
        <div className="my-4 w-full">
            <label>
                <strong>{label}</strong>
                <select className="px-2 py-2 w-full border-2 border-green-600" defaultValue={defaultValue || list[0]?.value} onChange={(e) => handleChange(e.target.value)}>
                    {
                        list.map(({ title, value }, i) =>
                            <option key={i} value={value}>{title}</option>
                        )
                    }
                </select>
            </label>
        </div>
    )
}

export default SelectInput