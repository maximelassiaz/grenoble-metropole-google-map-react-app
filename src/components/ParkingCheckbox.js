import { Icon } from "@iconify/react"

const ParkingCheckbox = ({ type, label, icon, handleChange }) => {
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
                <Icon 
                    className="parking-icon"
                    icon={ icon }
                />
            </label>
        </div>
    )
}

export default ParkingCheckbox
