import { Icon } from '@iconify/react'
import parkingIcon from '@iconify/icons-mdi/parking'
import moneyIcon from '@iconify/icons-mdi/currency-usd'
import wheelchairIcon from '@iconify/icons-mdi/wheelchair-accessibility'
import taxiIcon from '@iconify/icons-mdi/taxi'
import chargingstationIcon from '@iconify/icons-mdi/ev-station'
import carsharingIcon from '@iconify/icons-mdi/car-2-plus'
import deliveryIcon from '@iconify/icons-mdi/truck-delivery'
import dropoffIcon from '@iconify/icons-mdi/clock-time-two-outline'
import policeIcon from '@iconify/icons-mdi/police-badge'
import consulateIcon from '@iconify/icons-mdi/handshake-outline'

const ParkingMarker = ({ iconType, onClick }) => {

    const pickIcon = (iconType) => {
        if (iconType === "handicapé") return wheelchairIcon
        if (iconType === "livraison") return deliveryIcon
        if (iconType === "transport de fond") return moneyIcon
        if (iconType === "autopartage") return carsharingIcon
        if (iconType === "bornes toyota") return chargingstationIcon
        if (iconType === "dépose minute") return dropoffIcon
        if (iconType === "consulat") return consulateIcon
        if (iconType === "police municipale") return policeIcon
        if (iconType === "taxi") return taxiIcon
        return parkingIcon
    }
    
    return (
        <div 
            className="parking-marker" 
            onClick={onClick}
        >
            <Icon 
                icon={pickIcon(iconType)}
                className="parking-icon"
            />
        </div>
    )
}

export default ParkingMarker
