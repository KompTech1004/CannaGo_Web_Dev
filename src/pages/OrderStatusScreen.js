import React from 'react'
import Footer from '../components/Footer'
import OrderStatus from '../components/OrderStatus'
import Navbar from '../components/Navbar'
import Image from '../images/checkout-1.png'
const OrderStatusScreen = () => {
    return (
        <div>
            <Navbar/>
            <div className="order-status-img"><img src={Image}/></div>
            <OrderStatus/>
            <Footer/>
        </div>
    )
}
export default OrderStatusScreen;