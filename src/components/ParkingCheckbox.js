const ParkingCheckbox = ({ type, label, handleChange, checked }) => {
    return (
        <div className="parking-checkbox">
            <input 
                type="checkbox" 
                name={ type } 
                id={ type } 
                onChange={ handleChange } 
            />
            <label 
                htmlFor={ type }
            >
                { label }
            </label>
        </div>
    )
}

export default ParkingCheckbox
