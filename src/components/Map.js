import { useState } from "react"
import GoogleMapReact from "google-map-react"
import ParkingMarker from "./ParkingMarker"
import ParkingInfoBox from "./ParkingInfoBox"

const Map = ({ center, zoom, parkingList }) => {
    const [parkingInfo, setParkingInfo] = useState(null)

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: ''}}ù
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {parkingList.map(parking => (
                    <ParkingMarker
                        key={ parking["_id"] } 
                        lat={ parking.geometry.coordinates[1] }
                        lng={ parking.geometry.coordinates[0] }
                        iconType={ parking.properties.PLASPE_TYPE_NOM }
                        onClick={() => setParkingInfo({ 
                            id: parking.properties.PLASPE_ID,
                            type: parking.properties.PLASPE_TYPE_NOM,
                            num: parking.properties.PLASPE_ADRES_LIBEL,
                            street: parking.properties.PLASPE_VOIE_NOMCOMPL
                        })}
                    />
                ))}
            </GoogleMapReact>
            { parkingInfo && <ParkingInfoBox info={ parkingInfo }/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 45.1885,
        lng: 5.7245
    },
    zoom: 15
}

export default Map
