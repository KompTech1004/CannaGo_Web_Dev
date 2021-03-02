import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
const CheckoutForm = () => {
    let history = useHistory();
    const submitHandler = e => {
        e.preventDefault();
        history.push("/orderstatus");
    }
    const [cvc, setCvc] = useState();
    const [card, setCard] = useState();
    const [exp, setExp] = useState();
    const [zip, setZip] = useState();
    const expHandler = e => {
        let value = e.nativeEvent.data;
        if ((value >= 0 && value < 9)) {
            if (e.target.value.length === 2 && !e.target.value.includes('/')) {
                e.target.value += "/"
            }
            else if (e.target.value.length === 1 && e.target.value.includes('/')) {
                e.target.value = "";
            }
            setExp(e.target.value)

        }
    }
    const cvcHandler = e => {
        const { value, maxLength } = e.target;
        const message = value.slice(0, maxLength);
        setCvc(message);
    }
    const zipHandler = e => {
        const { value, maxLength } = e.target;
        const message = value.slice(0, maxLength);
        setZip(message);
    }
    const cardInput = e => {
        let value = e.nativeEvent.data;
        if ((value >= 0 && value < 9) || value === " ") {
            setCard(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim());
        }
    }
    return (
        <div className="checkout-form-cont">
            <form className="checkout-form" onSubmit={submitHandler}>
                <div className="checkout-form-title">
                    <p>Order Summary</p>
                </div>
                <div className="checkout-form-detailed">
                    <div className="checkout-form-details">
                        <p>Just CBD Wax x 2</p>
                        <p>$25.10</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>Just CBD Wax 10ml</p>
                        <p>$15.00</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>Service Fee</p>
                        <p>$5.00</p>
                    </div>
                    <div className="checkout-form-details">
                        <p>State Tax</p>
                        <p>$4.83</p>
                    </div>
                </div>
                <div className="checkout-form-details">
                    <p>Total Amount</p>
                    <p className="total-amount">$49.93</p>
                </div>
                <p className="checkout-form-text">Promo Code</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input placeholder="Type here" />
                        <button type="button">Apply</button>
                    </div>
                </div>
                <p className="checkout-form-text margin-top-2">Card Number</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input
                            onChange={e => cardInput(e)}
                            maxLength={19}
                            value={card}
                            placeholder="XXXX XXXX XXXX 1278" />
                    </div>
                </div>
                <div className="checkout-form-cardd">
                    <div className="checkout-form-card">
                        <p >Expiration Date</p>
                        <input value={exp} onChange={e => expHandler(e)} placeholder="06/22" maxLength={5} type="text" />
                    </div>
                    <div className="checkout-form-card">
                        <p>CVC</p>
                        <input
                            placeholder="071"
                            value={cvc}
                            onChange={cvcHandler}
                            type="number"
                            maxLength="3" />
                    </div>
                </div>
                <p className="checkout-form-text margin-top-2">Drop Off Address</p>
                <div className="checkout-form-pr">
                    <div className="checkout-form-promo">
                        <input placeholder="Street Address" />
                    </div>
                </div>
                <div className="checkout-form-address">
                    <input placeholder="City" />
                    <input placeholder="GA" />
                    <input placeholder="Zip Code" value={zip} onChange={zipHandler} type="number" maxLength={6} />
                </div>
                <p className="checkout-form-text margin-top-2">Special Request</p>
                <div className="checkout-form-specialr">
                    <div className="checkout-form-special-request">
                        <textarea placeholder="The gate code is #1234" />
                    </div>
                </div>
                <button className="checkout-form-submit" type="submit">Check Out</button>
            </form>
        </div>
    )
}
export default CheckoutForm;