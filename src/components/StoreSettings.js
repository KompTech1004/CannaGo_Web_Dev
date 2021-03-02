import React, { useState } from 'react'
import DispensaryStations from '../components/DispensaryStations'
import User from '../images/user-green.svg'
import Cart from '../images/cart.svg'
import Hist from '../images/messageImg.png'
import ProfileCard from './ProfileCard'
import { useHistory } from "react-router-dom";
import ProfileModal from './ProfileModal'
import Switch from "react-switch";

const StoreSettings = () => {
    const [checked, setChecked] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    let history = useHistory();
    const logout = () => {
        localStorage.setItem('loggedIn', false)
        history.push("/");
    }
    const modalHandler = () => {
        setModalShow(true)
    }
    const storeFront = () => {
        history.push("/shopdispensary");
    }
    const DispensaryInfo = () => {
        history.push('/dispensaryinfo');
    }
    const iconStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "#878787",
        paddingRight: 2
    }
    return (
        <div className="dispensary-settings">
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="dispensary-cont">
                <div className="switchArea">
                    <Switch
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                        width={100}
                        height={40}
                        uncheckedIcon={<div style={iconStyle}>Online</div>}
                        checkedIcon={<div style={iconStyle}>Offline</div>}
                        offColor="#fff"
                        onColor="#fff"
                        offHandleColor="#61D273"
                        onHandleColor="#878787"
                        handleDiameter={30}
                        activeBoxShadow="0 0 2px 3px #3bf"
                    />
                </div>
                <DispensaryStations />
                <div className="priceArea mb30">
                    <h1 className="mt30">$1,325.70</h1>
                    <h5 className="mt10 mb30 greyTxt">Available Balance</h5>
                </div>

                <ProfileCard onClick={storeFront} text="Your Store Front" src={Cart} />
                <ProfileCard onClick={DispensaryInfo} text="Dispensary Information" src={Hist} />
                <ProfileCard onClick={modalHandler} text="Contact Support" src={User} />
                <ProfileCard onClick={logout} logout={true} text="Log Out" src={User} />
            </div>
        </div>
    )
}
export default StoreSettings;