import React, {useEffect, useState} from 'react'
const OrderSummary = (props) => {
    const [total,
        setTotal] = useState(0);
    useEffect(() => {
        let totalAmount = 0;
        props
            .items
            .map((item) => {
                totalAmount = totalAmount + (item.price * item.quantity);
                setTotal(totalAmount);
            })
    }, [props])
    return (
        <div className="order-summary-cont">
            <div className="order-summary-head">
                <p>Order Summary</p>
            </div>
            <div className="order-summary-body">
                {props
                    .items
                    .map((item) => <div className="order-summary-order">
                        <p>{item.title} {`${item.quantity > 1
                                ? `${ ' x' + item.quantity}`
                                : ""}`}</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>)}
                <div className="order-summary-order">
                    <p>Service Fee</p>
                    <p>$5.00</p>
                </div>
                <div className="order-summary-order">
                    <p>State Tax</p>
                    <p>$4.83</p>
                </div>
            </div>
            <div className="order-summary-total">
                <div className="order-summary-order">
                    <p>Total Amount</p>
                    <p className="total-amount">${(total + 9.83).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
export default OrderSummary;
