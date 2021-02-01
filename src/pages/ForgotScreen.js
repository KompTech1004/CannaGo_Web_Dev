import React, { useState } from 'react'
import { enteremail, checkemail } from '../constants/LongText'
import CustomInput from '../components/CustomInput'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css";

import forgotlogo from '../images/forgotlogo.png'
import forgot1 from '../images/forgot1.png'
import forgot2 from '../images/forgot2.png'
import forgot3 from '../images/forgot3.png'
import forgot4 from '../images/greenPhone.png'
import checkemailImg from '../images/checkemail.svg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-container">
          <img src={checkemailImg} alt="checkemail" className="checkemail" />
          <h2 className="normal-text">{checkemail}</h2>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ForgotScreen() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="forgot-container">
      <section className="forgot-main">
        <img src={forgotlogo} alt="Forgot password" className="forgotlogo" />
        <h2 className="normal-text">{enteremail}</h2>
        <CustomInput placeholder="Email Address" type="email" iconType="email" width={'46rem'} mt={30} mb={30} />
        <button className="bt-primary" style={{ marginTop: 30 }} onClick={() => setModalShow(true)}>Submit</button>
        <img src={forgot1} alt="fruit" className="forgotImg1" />
        <div className="forgot2-wrapper"><img src={forgot2} alt="fruit" className="forgotImg2" /></div>
        <div className="forgot3-wrapper"><img src={forgot3} alt="fruit" className="forgotImg3" /></div>
        <div className="forgot4-wrapper"><img src={forgot4} alt="fruit" className="forgotImg4" /></div>
      </section>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default ForgotScreen
