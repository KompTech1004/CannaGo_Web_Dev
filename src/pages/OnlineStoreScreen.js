import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OnlineStoreProducts from '../components/OnlineStoreProducts'

const OnlineStoreScreen = () => {
  return (
    <>
      <Navbar />
      <OnlineStoreProducts text="Shop Product" />
      <Footer />
    </>
  )
}

export default OnlineStoreScreen
