import React from 'react'

const OrderHistoryCardItem = props => {
    return (
        <div className="order-confirm-card-body">
            <div className="cart-card-image"><img src={props.img} width="170" height="200"/></div>
            <div className="order-history-card-text">
                <h2>Name: Just CBD Wax 10ml</h2>
                {/* <h3>from Cannabis Station</h3> */}
                <div className="order-history-card-quantity">
                    <p>{props.price}</p>
                    <div className="order-quantity">
                        <p>Quantity</p>
                        <div className="order-quantity-number">{props.qty}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderHistoryCardItem;