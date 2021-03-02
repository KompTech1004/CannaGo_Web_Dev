import React, {useState} from 'react'
import ProfileModal from './ProfileModal'

const OrderHistoryAmount = () => {
    const [modalShow,setModalShow] = useState(false);
    const modalHandler = () => {
        setModalShow(true)
    }

    return (
        <div className="order-history-amount">
            <h1>Delivered 11/22/20, 10:32 AM</h1>
            <div className="order-history-fees">
                <div>
                    <p>Product Total</p>
                    <p className="total-price">$47.88</p>
                </div>
                <div>
                    <p>Service Fee</p>
                    <p className="total-price">$5.00</p>
                </div>
                <div>
                    <p>Sales Tax</p>
                    <p className="total-price">$6.55</p>
                </div>
                <div>
                    <p>Tip</p>
                    <p className="total-price">$7.00</p>
                </div>
                <div className="total-amount-paid">
                    <h1>Total Amount Paid:
                    </h1>
                    <h2 className="total-price">$75.54</h2>
                </div>
            </div>
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)}/>
            <button onClick={modalHandler}>Report an issue</button>
        </div>
    )
}
export default OrderHistoryAmount;