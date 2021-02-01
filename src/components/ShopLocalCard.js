import React from 'react'
import {useHistory} from "react-router-dom";
const ShopLocalCard = ({img, name, hours}) => {
    let history = useHistory();
    const storeOnline = () => {
        if (localStorage.getItem('loggedIn')) {
            history.push('/storeonline')
        } else {
            history.push('/login');
        }
    }
    return (
        <div className="shop-local-card">
            <h2>{name}</h2>
            <div className="shop-local-card-wrapper">
                <a onClick={storeOnline}><img src={img} alt="" className="slideImg"/></a>
                <div className="shop-local-card-info">
                    <span>Store’s Pricing: $</span>
                    <span>Hours Today: {hours}</span>
                </div>
            </div>
        </div>
    )
}

export default ShopLocalCard
