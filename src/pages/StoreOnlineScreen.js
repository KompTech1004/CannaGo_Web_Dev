import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GoBackButton from '../components/GoBackButton'
import ShoppingStations from '../components/ShoppingStations'
import StoreOnlineProducts from '../components/StoreOnlineProducts'
import Image from '../images/cannabis-large.png'
const StoreOnlineScreen = () => {
    return (
        <>
            <Navbar />
            <div className="shopping-station-cont">
                <div className="back-cont"><GoBackButton /></div>
                <ShoppingStations />
            </div>
            <StoreOnlineProducts/>
            <div className="large-img-cont"><img src={Image} style={{width:"100%"}}/></div>
            <Footer />
        </>
    )
}

export default StoreOnlineScreen;