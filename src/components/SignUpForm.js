import React from 'react'
import Profile from './Profile'
import CustomInput from './CustomInput'
import avatar from '../images/avatar.png'
import { useHistory } from 'react-router-dom'

function _openPicker() {
  alert('Image Picker')
}

function SignUpForm() {

  let history = useHistory();
  const submitHandler = () => {
    localStorage.setItem('loggedIn', true)
    history.push("/");
  }

  return (
    <form className="in-section" onSubmit={submitHandler}>
      <Profile onClick={_openPicker} src={avatar} />
      <div className="align-row shortWidth">
        <CustomInput placeholder="First Name" type="text" iconType="user" half />
        <CustomInput placeholder="Last Name" type="text" iconType="user" half />
      </div>
      <div className="align-row shortWidth">
        <CustomInput placeholder="Date of Birth" type="text" iconType="user" half />
        <CustomInput style={{ backgroundColor: 'red' }} placeholder="Delivery Zip" type="number" iconType="user" half />
      </div>
      <CustomInput placeholder="Email Address" type="email" iconType="email" />
      <CustomInput placeholder="Password" type="password" iconType="password" />
      <CustomInput placeholder="Retype password" type="password" iconType="password" />
      <CustomInput placeholder="Mobile number" type="number" iconType="user" />
      <div className="terms-conditions pos-start">
        <input type="checkbox" id="agreeTerms" name="agreeTerms" />
        <label htmlFor="agreeTerms" id="agreeLabel"> By checking this I agree to CannaGo's <a href='/' style={{ color: '#61D273' }}> Terms & Conditions</a> </label>
      </div>
      <button className="bt-primary">Create Account</button>

    </form>
  )
}

export default SignUpForm
