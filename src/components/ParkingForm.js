import ParkingCheckbox from "./ParkingCheckbox"

const ParkingForm = ({ handleChange }) => {
    const parkingTypes = [
        {
            type: "handicapé",
            label: "Place PMR",
            checked: true
        },
        {
            type: "livraison",
            label: "Place livraison"
        },
        {
            type: "transport de fond",
            label: "Place convoyeur de fond"
        },
        {
            type: "autopartage",
            label: "Place autopartage"
        },
        {
            type: "bornes toyota",
            label: "Place rechargement électrique"
        },
        {
            type: "dépose minute",
            label: "Place dépose minute"
        },
        {
            type: "taxi",
            label: "Place taxi"
        },
        {
            type: "police municipale",
            label: "Place police municipale"
        },
        {
            type: "consulat",
            label: "Place consulat"
        },
        
    ]

    return (
        <form className="parking-form">
           {parkingTypes.map(parkingType => (
            <ParkingCheckbox 
                key={parkingType.type}
                type={parkingType.type}
                label={parkingType.label}
                handleChange={handleChange}
            />))
            }
            <button type="reset">Tout enlever</button>
        </form>
    )
}

export default ParkingForm
