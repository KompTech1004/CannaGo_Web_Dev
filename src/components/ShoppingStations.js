import React from 'react'
import Station from '../images/station.png'
const ShoppingStations = () => {
    return (
        <div className="stationcontainer">
            <p className="station-text">You’re Shopping: Cannabis Station</p>
            <img src={Station} className="station-img"/>
        </div>
    )
}
export default ShoppingStations;