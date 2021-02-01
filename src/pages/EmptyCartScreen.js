import React from 'react'
import Navbar from '../components/Navbar'
import Plus from '../images/plus-sign.svg'
import ShopLocal from '../components/ShopLocal'
import Footer from '../components/Footer'
import {useHistory} from "react-router-dom";
const EmptyCartScreen = () => {
    let history = useHistory();
    const cart = () => {
        history.push("/");
    }
    return (
        <div>
            <Navbar/>
            <div className="empty-cart-cont">
                <button onClick={cart} className="plus-btn"><img src={Plus}/></button>
                <p className="empty-card-text">Shopping Cart Empty</p>
            </div>
            <ShopLocal/>
            <Footer/>
        </div>
    )
}
export default EmptyCartScreen;