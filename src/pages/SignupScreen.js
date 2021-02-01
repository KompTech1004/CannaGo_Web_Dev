import React from 'react'
import SignUpForm from '../components/SignUpForm'
import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple2.png'

export default function SignupScreen() {
  return (
    <section className="section">
      <SignUpForm />
      <div className="greenArea2"><img src={greenPhone} alt="green" className="greenPhone" /></div>
      <div className="mapleArea"><img src={maple} alt="green" className="maple" /></div>
      <div className="mapleArea2"><img src={greenPhone} alt="green" className="greenPhone2" /></div>
    </section>
  )
}
