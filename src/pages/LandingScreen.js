import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ShopLocal from '../components/ShopLocal'
import ShopProducts from '../components/ShopProducts'

const LandingScreen = () => {
    return (<> <Navbar/> < Header /> <ShopLocal/> < ShopProducts /> <Blog/> < Footer /> </>)
}

export default LandingScreen
