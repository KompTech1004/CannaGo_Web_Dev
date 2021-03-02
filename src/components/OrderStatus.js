import React from 'react'
import OrderStatusInfo from './OrderStatusInfo';
const OrderStatus = () => {
    return (
        <div className="order-status-cont">
            <p className="order-status-title">Order Status</p>
            <OrderStatusInfo
                title="Order Placed"
                body="We have received your order."
                time="11:20 AM, 11/20/2020"
                delivered={true}/>
            <OrderStatusInfo
                title="Order Confirmed"
                body="The store has confirmed your order."
                time="11:22 AM, 11/20/2020"
                delivered={true}/>
            <OrderStatusInfo
                title="Order En Route"
                body="Your order is being delivered."
                time="10:03 AM, 11/21/2020"
                delivered={true}/>
            <OrderStatusInfo
                title="Order Delivered"
                body="Your order has been dropped off."
                time="10:32 AM, 11/21/2020"/>
            <button className="message-driver">Message Driver</button>
        </div>
    )
}
export default OrderStatus;