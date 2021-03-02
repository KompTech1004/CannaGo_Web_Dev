import React from 'react'
import Footer from '../components/Footer'
import DriverOrderStatus from '../components/DriverOrderStatus'
import DispensaryNavbar from '../components/DispensaryNavbar'
import Image from '../images/driverOstatus.png'
import GoBackButton from '../components/GoBackButton'

const DriverOrderStatusScreen = () => {
    return (
        <div>
            <DispensaryNavbar/>
            <div className="driver-order-status-img"><img src={Image}/></div>
            <div className="back-cont mt30"><GoBackButton /></div>
            <DriverOrderStatus/>
            <Footer/>
        </div>
    )
}
export default DriverOrderStatusScreen;