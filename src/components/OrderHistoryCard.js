import React from 'react'
import OrderHistoryCardItem from './OrderHistoryCardItem'
import OrderHistoryAmount from './OrderHistoryAmount.js';
const OrderHistoryCard = (props) => {
    return (
        <div className="order-history-card">
            <h1>Order Reference #FG1735UIWH7</h1>
            <OrderHistoryCardItem img={props.img1} price={props.price1} qty={1}/>
            <OrderHistoryCardItem img={props.img2} price={props.price2} qty={1}/>
            <OrderHistoryAmount/>
        </div>
    )
}
export default OrderHistoryCard;