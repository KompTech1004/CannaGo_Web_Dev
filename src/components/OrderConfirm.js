import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import OrderHistoryCardItem from '../components/OrderHistoryCardItem'
import msg from '../images/msg.svg'
import phone from '../images/phone.svg'
import ProfileModal from './ProfileModal'

function OrderConfirm(props) {
  let history = useHistory()
  const pickup = () => {
    props.usertype === 'dispensary'
      ? alert('pickup')
      : history.push('driverorderstatus')
  }
  const deny = () => {
    alert('deny')
  }
  const [modalShow, setModalShow] = useState(false);
  const modalHandler = () => {
    setModalShow(true)
  }
  return (
    <div className="order-confirm">
      <div className="order-confirm-wrapper">
        <div className="order-item-area">
          <OrderHistoryCardItem img={props.img1} price={props.price1} qty={props.qty1} confirm />
          <OrderHistoryCardItem img={props.img2} price={props.price2} qty={props.qty2} confirm />
        </div>
        <div className="order-desc-area">
          <div className="row-array space-between">
            <h2 className="mb50">Order Placed 11/24/20, 11:04 AM</h2>
            {
              !props.paid &&
              <div>
                <img src={msg} alt="msg" />
                <img src={phone} alt="phone" />
              </div>
            }
          </div>
          <div className="full-width">
            <h2>John H. order # EUI 2E273Y</h2>
            {
              props.usertype === 'dispensary' ?
                <>
                  <div className="row-array space-between">
                    <h3>Product Total</h3>
                    <h3>$27.55</h3>
                  </div>
                  <div className="row-array space-between">
                    <h3>CannaGo's Service Fee</h3>
                    <h3>-$8.26</h3>
                  </div>
                </>
                : props.paid ?
                  <>
                    <div className="row-array space-between">
                      <h3>Drop-off</h3>
                      <h3>$5.00</h3>
                    </div>
                    <div className="row-array space-between">
                      <h3>Tip</h3>
                      <h3>+ $3.00</h3>
                    </div>
                  </>
                  :
                  <>
                    <div className="row-array space-between">
                      <h3>Delivery</h3>
                      <h3>$5.00</h3>
                    </div>
                    <h3>Drop-off address: 2783 S North Folk Street, Miami, FL, 30312 Special Note: Gate code is 2638</h3>
                  </>
            }

          </div>
          <div className="row-array space-between mt90 full-width mb90">
            <h2>Your payout:</h2>
            {
              props.usertype === 'dispensary' ?
                <h1 className="payout-price">$19.00</h1>
                :
                <h1 className="payout-price">$5.00</h1>
            }
          </div>
          <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
          {
            props.paid ?
              <>
                <button onClick={modalHandler} className="report mb50" >Report an Issue</button>
                <h2>Order Completed 11/23/20, 2:22 PM</h2>
              </>
              :
              <div className="space-between">
                <button onClick={pickup} className="btn-pickup">{props.usertype === 'dispensary' ? 'Order Ready For PickUp' : 'Drop-off Order'}</button>
                <button onClick={deny} className="modal-cancel">{props.usertype === 'dispensary' ? "Don't have Item" : "Find Another Driver"}</button>
              </div>
          }
        </div>
      </div>
    </div >
  )
}

export default OrderConfirm
