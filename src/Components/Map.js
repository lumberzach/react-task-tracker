import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import FireInfo from './FireInfo'
import { useState } from 'react'


const Map = ({ fireData, center, zoom }) => {
    const [fireLocationInfo, setFireLocationInfo] = useState(null)

    const fireMarkers = fireData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            showInfo={() => setFireLocationInfo({id: ev.id, title: ev.title})} />
        }
        return null
    })



    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCSHrdeqskoumYDagqEGctWZOW7rYpsyog' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                

                {fireMarkers}
            </GoogleMapReact>
            {fireLocationInfo && <FireInfo fireInfo={fireLocationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    }, 
    zoom: 6
}

export default Map
