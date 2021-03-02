import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ShopLocal from '../components/ShopLocal'
import ShopProducts from '../components/ShopProducts'

const LandingScreen = () => {
    let history = useHistory()
    useEffect(() => {
        console.log('This is landing screen=>', localStorage.getItem('usertype'));
        if (localStorage.getItem('loggedIn') === 'true') {
            if (localStorage.getItem('usertype') === "dispensary") {
                history.push('/dispensarylanding')
            } else if (localStorage.getItem('usertype') === "driver") {
                history.push('/profile')
            }
        } else {
            history.push('/')
        }
    }, [])
    return (<> <Navbar /> < Header /> <ShopLocal /> < ShopProducts /> <Blog /> < Footer /> </>)
}

export default LandingScreen
