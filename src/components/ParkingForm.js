import ParkingCheckbox from "./ParkingCheckbox"
import moneyIcon from '@iconify/icons-mdi/currency-usd'
import wheelchairIcon from '@iconify/icons-mdi/wheelchair-accessibility'
import taxiIcon from '@iconify/icons-mdi/taxi'
import chargingstationIcon from '@iconify/icons-mdi/ev-station'
import carsharingIcon from '@iconify/icons-mdi/car-2-plus'
import deliveryIcon from '@iconify/icons-mdi/truck-delivery'
import dropoffIcon from '@iconify/icons-mdi/clock-time-two-outline'
import policeIcon from '@iconify/icons-mdi/police-badge'
import consulateIcon from '@iconify/icons-mdi/handshake-outline'

const ParkingForm = ({ handleChange }) => {
    const parkingTypes = [
        {
            type: "handicapé",
            label: "Place PMR",
            icon: wheelchairIcon
        },
        {
            type: "livraison",
            label: "Place livraison",
            icon: deliveryIcon
        },
        {
            type: "transport de fond",
            label: "Place convoyeur de fond",
            icon: moneyIcon
        },
        {
            type: "autopartage",
            label: "Place autopartage",
            icon: carsharingIcon
        },
        {
            type: "bornes toyota",
            label: "Place rechargement électrique",
            icon: chargingstationIcon
        },
        {
            type: "dépose minute",
            label: "Place dépose minute",
            icon: dropoffIcon
        },
        {
            type: "taxi",
            label: "Place taxi",
            icon: taxiIcon
        },
        {
            type: "police municipale",
            label: "Place police municipale",
            icon: policeIcon
        },
        {
            type: "consulat",
            label: "Place consulat",
            icon: consulateIcon
        },
        
    ]

    return (
        <form className="parking-form">
            <h2>Places de stationnements</h2>
           {parkingTypes.map(parkingType => (
            <ParkingCheckbox 
                key={parkingType.type}
                type={parkingType.type}
                label={parkingType.label}
                icon={parkingType.icon}
                handleChange={handleChange}
            />))
            }
        </form>
    )
}

export default ParkingForm
