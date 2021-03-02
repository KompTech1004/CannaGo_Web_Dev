import React from 'react'
import DispensaryNavbar from '../components/DispensaryNavbar'
import GoBackButton from '../components/GoBackButton'
import DriverSignUpForm from '../components/DriverSignUpForm'

function DriverProfileInfoScreen() {
  return (
    <>
      <DispensaryNavbar />
      <div className="shopping-station-cont">
        <div className="back-cont"><GoBackButton /></div>
        <h1 className="mt50">Driver Information</h1>
      </div>
      <DriverSignUpForm driverInfo />
    </>
  )
}

export default DriverProfileInfoScreen
