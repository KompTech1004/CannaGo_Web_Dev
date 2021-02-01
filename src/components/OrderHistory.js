import React from 'react'
import GoBackButton from './GoBackButton'
import OrderHistoryCard from './OrderHistoryCard'
import Product from '../images/product-1.png'
import Product2 from '../images/product-3.png'
import Product4 from '../images/product-4.png'
const OrderHistory = () => {
    return (
        <div className="order-history-cont pt-5">

            <div className="order-history-body">
                <div className="order-history-scroll">
                    <h1 className="order-history-title">Order History</h1>
                    <div className="back-cont pt-5"><GoBackButton/></div>
                  
                    <div className="order-history-products" id="products">
                        <OrderHistoryCard
                            img1={Product}
                            img2={Product2}
                            price1="$27.00"
                            price2="$29.00"/>
                        <OrderHistoryCard
                            img1={Product4}
                            img2={Product2}
                            price1="$12.55"
                            price2="$15.00"/>
                        <OrderHistoryCard
                            img1={Product}
                            img2={Product2}
                            price1="$27.00"
                            price2="$29.00"/>
                        <OrderHistoryCard
                            img1={Product4}
                            img2={Product2}
                            price1="$12.55"
                            price2="$15.00"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderHistory;