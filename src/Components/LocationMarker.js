import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'



const LocationMarker = ({ lat, lng, showInfo}) => {
    return (
        <div className="location-marker" onClick={showInfo}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
