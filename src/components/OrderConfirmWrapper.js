import React from 'react'
import OrderConfirm from './OrderConfirm'
import CBD from '../images/product-4.png'
import WAX from '../images/product-3.png'

function OrderConfirmWrapper(props) {
  return (
    <div className="order-cont-wrapper">
      <div className="order-cont" id="orderHistory">
        <div className="addToStore mt90">
          <h1 className="mb10">Orders to Confirm</h1>
        </div>
        <OrderConfirm img1={CBD} img2={WAX} price1='$12.55' price2="$15.00" qty1={2} qty2={1} usertype={props.usertype} />
        <div className="addToStore mt90">
          <h1 className="mb10">Order History</h1>
        </div>
        <OrderConfirm img1={CBD} img2={WAX} price1='$25.00' price2="$15.00" qty1={1} qty2={1} paid usertype={props.usertype} />
        <OrderConfirm img1={CBD} img2={WAX} price1='$12.55' price2="$15.00" qty1={2} qty2={1} paid usertype={props.usertype} />
        <OrderConfirm img1={CBD} img2={WAX} price1='$12.55' price2="$15.00" qty1={2} qty2={1} paid usertype={props.usertype} />
        <OrderConfirm img1={CBD} img2={WAX} price1='$12.55' price2="$15.00" qty1={2} qty2={1} paid usertype={props.usertype} />
      </div>
    </div>
  )
}

export default OrderConfirmWrapper
