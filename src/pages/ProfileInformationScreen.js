import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoBackButton from '../components/GoBackButton'
import ProfileInfo from '../components/ProfileInfo'
const ProfileInformationScreen = () => {
    return (
        <div>
            <Navbar/>
            <div className="profile-info-cont">
                <div className="back-cont"><GoBackButton/></div>
                <ProfileInfo/>
            </div>
            <Footer/>
        </div>
    )
}
export default ProfileInformationScreen;