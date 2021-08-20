import { Icon } from '@iconify/react'
import parkingIcon from '@iconify/icons-mdi/parking'
import moneyIcon from '@iconify/icons-mdi/currency-usd'
import wheelchairIcon from '@iconify/icons-mdi/wheelchair-accessibility'
import taxiIcon from '@iconify/icons-mdi/taxi'
import chargingstationIcon from '@iconify/icons-mdi/ev-station'
import carsharing from '@iconify/icons-mdi/car-2-plus'
import delivery from '@iconify/icons-mdi/truck-delivery'
import dropoff from '@iconify/icons-mdi/clock-time-two-outline'

const ParkingMarker = ({ iconType, lat, lng, onClick }) => {
    
    return (
        <div 
            className="parking-marker" 
            onClick={onClick}
        >
            <Icon 
                icon={parkingIcon}
                className="parking-icon"
            />
        </div>
    )
}

export default ParkingMarker
