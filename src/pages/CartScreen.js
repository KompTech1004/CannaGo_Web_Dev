import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartItems from '../components/CartItems'
import OnlineStoreProducts from '../components/OnlineStoreProducts'
const CartScreen = () => {
    return (
        <div>
            <Navbar/>
            <CartItems/>
            <OnlineStoreProducts text="More Products from Cannabis Station "/>
            <Footer/>
        </div>
    )
}
export default CartScreen;