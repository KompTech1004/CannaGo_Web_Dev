import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import ProfileModal from './ProfileModal'
import Profile from './Profile'
import ProfileCard from './ProfileCard'
import Switch from "react-switch";

import Avatar from '../images/avatar.png'
import User from '../images/user-green.svg'
import Hist from '../images/history.svg'
import BG from '../images/profile-bg.svg'
import licenseImg from '../images/licenseImg.svg'

const ProfileSettings = (props) => {
    let history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [userType, setUserType] = useState(props.role)
    useEffect(() => {
        console.log('role====>', props.role);
        setUserType(props.role)
    }, [])
    const logout = () => {
        localStorage.setItem('loggedIn', false);
        localStorage.removeItem('usertype')
        console.log('logout btn clicked=>',localStorage.getItem('usertype'));
        history.push("/");
    }
    const modalHandler = () => {
        setModalShow(true)
    }
    const profile = () => {
        userType === 'consumer' ?
            history.push("/profileinfo")
            :
            history.push("/driverprofileinfo")
    }
    const orderhistory = () => {
        userType === 'consumer' ?
            history.push('/orderhistory')
            :
            console.log('driver history');
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
        <div className="profile-settings">
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="profile-cont">
                {userType === 'driver' && <h1 className="driver-profile-title">Profile</h1>}
                <div className="profile-avatar">
                    <Profile src={Avatar} />
                    {
                        userType === 'consumer' ?
                            <p>John H, 25</p>
                            :
                            <div className="driver-avatar-desc">
                                <div className="driver-avatar-info">
                                    <h3>Larry W, 33</h3>
                                    <h1>$275.77</h1>
                                    <h5>Available Balance</h5>
                                </div>
                                <div className="switchArea-driver">
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
                            </div>
                    }
                </div>
                <ProfileCard onClick={profile} text={userType === 'driver' ? "Drive Information" : "Profile Information"} src={userType === 'driver' ? licenseImg : User} />
                <ProfileCard onClick={orderhistory} text={userType === 'driver' ? "Driver History" : "Order History"} src={Hist} />
                <ProfileCard onClick={modalHandler} text="Contact Support" src={User} />
                <ProfileCard onClick={logout} logout={true} text="Log Out" src={User} />
            </div>
            <div className="profile-bg">
                {userType === 'consumer' && <img src={BG} />}
            </div>

        </div>
    )
}
export default ProfileSettings;