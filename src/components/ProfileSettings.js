import React, {useState} from 'react'
import Profile from './Profile'
import Avatar from '../images/avatar.png'
import User from '../images/user-green.svg'
import Hist from '../images/history.svg'
import ProfileCard from './ProfileCard'
import BG from '../images/profile-bg.svg'
import {useHistory} from "react-router-dom";
import ProfileModal from './ProfileModal'
const ProfileSettings = () => {
    const [modalShow,
        setModalShow] = useState(false);
    let history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }
    const modalHandler = () => {
        setModalShow(true)
    }
    const profile = () => {
        history.push("/profileinfo");
    }
    const orderhistory = () => {
        history.push('/orderhistory');
    }
    return (
        <div className="profile-settings">
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)}/>
            <div className="profile-cont">
                <div className="profile-avatar">
                    <Profile src={Avatar}/>
                    <p>John H, 25</p>
                </div>
                <ProfileCard onClick={profile} text="Profile Information" src={User}/>
                <ProfileCard onClick={orderhistory} text="Order History" src={Hist}/>
                <ProfileCard onClick={modalHandler} text="Contact Support" src={User}/>
                <ProfileCard onClick={logout} logout={true} text="Log Out" src={User}/>
            </div>
            <div className="profile-bg">
                <img src={BG}/>
            </div>

        </div>
    )
}
export default ProfileSettings;