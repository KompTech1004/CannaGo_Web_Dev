import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ProfileModal = (props) => {
    return (
        <div className="scoped-bootstrap">
            <Modal
                {...props}
                backdropClassName="scoped-bootstrap"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="modal-message">
                        <div className="modal-message-cont">
                            <h1>Message:</h1>
                            <textarea placeholder="Order Reference #FG1735UIWH7&#10;Type here…."/>
                            <div className="modal-buttons">
                                <button className="modal-back" onClick={props.onHide}>
                                    <u>Back</u>
                                </button>
                                <button onClick={props.onHide} className="modal-send">Send</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default ProfileModal;