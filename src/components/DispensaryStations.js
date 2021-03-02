import React from 'react'
import Station from '../images/emptyPhoto.png'
import Camera from '../images/camera.png'
const DispensaryStations = (props) => {
    return (
        <div className="stationcontainer-dispensary">
            <img src={Station} alt="station" className={props.greenborder ? 'greenStation' : 'station-img'} />
            <img src={Camera} alt="camera" className="camera" onClick={() => alert(22)} />
        </div>
    )
}
export default DispensaryStations;