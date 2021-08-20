const ParkingInfoBox = ({ info }) => {
    return (
        <div className="parking-info">
            <h2>Parking Info</h2>
            <ul>
                <li>ID : <strong>{ info.id }</strong></li>
                <li>TYPE : <strong>{ info.type }</strong></li>
                <li>ADRESSE : <strong>{`${info.num} ${info.street}`}</strong></li>
            </ul>
        </div>
    )
}

export default ParkingInfoBox
