import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DispensaryNavbar from '../components/DispensaryNavbar'
import GoBackButton from '../components/GoBackButton'
import OrderConfirmWrapper from '../components/OrderConfirmWrapper'
import Footer from '../components/Footer'

function OrderConfirmScreen() {
  let location = useLocation()
  useEffect(() => {
    console.log('location must be OrderConfirm =>', location.pathname, location.state);
  }, [])
  return (
    <>
      <DispensaryNavbar />
      <div className="back-cont mt30"><GoBackButton /></div>
      <OrderConfirmWrapper usertype={location.state} />
      <Footer />
    </>
  )
}

export default OrderConfirmScreen
