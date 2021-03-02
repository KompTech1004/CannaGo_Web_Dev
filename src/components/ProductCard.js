import React from 'react'
import { useHistory } from "react-router-dom";

import { FaAngleRight } from 'react-icons/fa'

const ProductCard = ({ price, img, name }) => {
    let history = useHistory();
    const selectedItem = () => {
        if (localStorage.getItem('usertype') === 'consumer') {
            history.push("/selecteditem");
        } else if (localStorage.getItem('usertype') === 'dispensary') {
            history.push({
                pathname: '/updatestore',
                state: 'update'
            });
        } else {
            history.push('/login');
        }
    }
    return (
        <div className="product-card">
            <div className="product-card-img">
                <img src={img} alt="" className="productImg" onClick={selectedItem} />
                <span className="product-price">$ {price.toFixed(2)}</span>
            </div>
            <div className="product-card-info" onClick={selectedItem}>
                <h3>{name}</h3>
                <a onClick={selectedItem} className="product-btn">
                    <FaAngleRight />
                </a>
            </div>
        </div>
    )
}

export default ProductCard
