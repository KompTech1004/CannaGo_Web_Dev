import React, {useState} from 'react'
import Image1 from '../images/cart-image1.png'
import Image2 from '../images/cart-image2.png'
import OrderSummary from './OrderSummary'
import {useHistory} from "react-router-dom";
import Delete from '../images/delete-icon.png'
const CartItems = () => {
    let history = useHistory();
    const emptyCard = () => {
        history.push("/emptycart");
    }
    const [check,
        setCheck] = useState(false);
    const [items,
        setItems] = useState([
        {
            title: "Just CBD Wax",
            price: 12.55,
            quantity: 2,
            image: Image1
        }, {
            title: "Just CBD Wax 10ml",
            price: 15.00,
            quantity: 1,
            image: Image2
        }
    ]);
    const checkout = () => {
        history.push("/checkout");
    }
    return (
        <div className="cart-items">
            <div className="cart-cont">
                <div className="cart-cards-cont">
                    {items.map((item, index) => <div className="cart-card">
                        <div className="cart-card-image">
                            <img src={item.image} alt="" width="170" height="200"/>
                        </div>
                        <div className="cart-card-text">
                            <p className="cart-card-title">{item.title}</p>
                            <div className="cart-card-quantity">
                                <p className="cart-card-price">${item.price.toFixed(2)}</p>
                                <p className="cart-card-qu">Quantity</p>
                                <div className="counter-container">
                                    <button
                                        onClick={() => {
                                        let toChange = items;
                                        toChange[index].quantity > 1 && toChange[index].quantity--;
                                        setItems(toChange);
                                        setCheck(!check);
                                    }}>-</button>
                                    <p>{item.quantity}</p>
                                    <button
                                        onClick={() => {
                                        let toChange = items;
                                        toChange[index].quantity++;
                                        setItems(toChange);
                                        setCheck(!check);
                                    }}>+</button>
                                </div>
                            </div>
                            <div className="cart-card-remove">
                                <button onClick={emptyCard}>
                                    <img src={Delete} alt="delete" className="delete-img"/>
                                    <p>Remove</p>
                                </button>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="cart-btn-cont">
                    <button className="cart-btn-continue">Continue Shopping</button>
                    <button onClick={checkout} className="cart-btn-next">NEXT</button>
                </div>
            </div>
            <OrderSummary items={items}/>
        </div>
    )
}
export default CartItems