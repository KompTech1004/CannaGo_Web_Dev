import React from 'react'
import logoWithUserType from '../images/logoWithUserType.png'

export default function LogoWithUserType({...props}) {
  return (
    <div className="logoArea">
      <img src={logoWithUserType} alt="logoWithUserType" className="logoWithUserType" />
      <p className="userType">{props.userType}</p>
    </div>
  )
}
