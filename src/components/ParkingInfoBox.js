const ParkingInfoBox = ({ info }) => {
    const parkingType = (type) => {
        if (type === "handicapé") return "Place PMR"
        if (type === "livraison") return "Place livraison"
        if (type === "transport de fond") return "Place convoyeur de fonds"
        if (type === "autopartage") return "Place autopartage"
        if (type === "bornes toyota") return "Place rechargement électrique"
        if (type === "dépose minute") return "Place dépose minute"
        if (type === "consulat") return "Place consulat"
        if (type === "police municipale") return "Place police municipale"
        if (type === "taxi") return "Place taxi"
        return "N/A" 
    }

    return (
        <div className="parking-info">
            <h2>Parking Info</h2>
            <ul>
                <li>Id : <strong>{ info.id }</strong></li>
                <li>Type : <strong>{ parkingType(info.type) }</strong></li>
                <li>Adresse : <strong>{`${info.num} ${info.street}`}</strong></li>
            </ul>
        </div>
    )
}

export default ParkingInfoBox
