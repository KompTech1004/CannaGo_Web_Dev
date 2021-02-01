import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProfileSettings from '../components/ProfileSettings'
const ProfileScreen = () => {
    return (
        <div>
            <Navbar/>
            <ProfileSettings/>
            <Footer/>
        </div>
    )
}
export default ProfileScreen;