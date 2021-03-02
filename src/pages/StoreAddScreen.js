import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DispensaryNavbar from '../components/DispensaryNavbar'
import DispensaryStations from '../components/DispensaryStations'
import AddItemSettings from '../components/AddItemSettings'
import GoBackButton from '../components/GoBackButton'
import BG from '../images/forgot2.png'
import Footer from '../components/Footer'

function StoreAddScreen() {
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state);
  }, [location])
  return (
    <>
      <DispensaryNavbar />
      <div className="back-cont mt50"><GoBackButton /></div>
      <div className="dispensary-settings-storeadd">
        <DispensaryStations />
        <AddItemSettings status={location.state === 'add' ? 'add' : 'update'} />
      </div>
      <div className="large-img-cont-storeadd"><img src={BG} alt="" style={{ width: "100%" }} /></div>
      <Footer />
    </>
  )
}

export default StoreAddScreen
