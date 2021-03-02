import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import CustomInputLong from '../components/CustomInputLong'
import Footer from '../components/Footer'
import ProfileCard from '../components/ProfileCard'

import mapImg from '../images/mapImg.png'
import messageImg from '../images/messageImg.png'
import transMaple from '../images/profile-left.png'

const DispensarySignUpForm = () => {
  let history = useHistory();
  const submitHandler = e => {
    e.preventDefault();
    history.push("/orderstatus");
  }
  const setHours = () => {
    history.push("/hourset");
  }

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [ownerEmail, setOwnerEmail] = useState()
  const [ownerPhone, setOwnerPhone] = useState()
  const [ownerPass, setOwnerPass] = useState()
  const [ownerCpass, setOwnerCpass] = useState()

  const [disName, setDisName] = useState()
  const [disPhone, setDisphone] = useState()
  const [disStreet, setDisStreet] = useState()
  const [city, setCity] = useState()
  const [GA, setGA] = useState()
  const [zip, setZip] = useState();
  const [businessName, setBusinessName] = useState();
  const [feinName, setFeinName] = useState();

  const setInformation = (val, order) => {
    if (order === 'first') {
      setFirstName(val)
    } else if (order === 'last') {
      setLastName(val)
    } else if (order === 'ownerEmail') {
      setOwnerEmail(val)
    } else if (order === 'ownerPhone') {
      setOwnerPhone(val)
    } else if (order === 'ownerPass') {
      setOwnerPass(val)
    } else if (order === 'ownerCpass') {
      setOwnerCpass(val)
    } else if (order === 'disName') {
      setDisName(val)
    } else if (order === 'disPhone') {
      setDisphone(val)
    } else if (order === 'disStreet') {
      setDisStreet(val)
    } else if (order === 'city') {
      setCity(val)
    } else if (order === 'GA') {
      setGA(val)
    } else if (order === 'zip') {
      setZip(val)
    } else if (order === 'businessName') {
      setBusinessName(val)
    } else if (order === 'feinName') {
      setFeinName(val)
    }
  }
  return (
    <>
      <div className="checkout-form-cont">
        <form className="checkout-form" onSubmit={submitHandler}>
          <div className="checkout-form-title-dispensary">
            <h1>Sign Up Information</h1>
          </div>
          <div className="checkout-form-cont">
            <CustomInputLong placeholder="First Name" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'first')} val={firstName} />
            <CustomInputLong placeholder="Last Name" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'last')} val={lastName} />
            <CustomInputLong placeholder="Owner's Email Address" type="email" iconType="email" onChange={(e) => setInformation(e.target.value, 'ownerEmail')} val={ownerEmail} />
            <CustomInputLong placeholder="Owner's Phone Number" type="number" iconType="user" onChange={(e) => setInformation(e.target.value, 'ownerPhone')} val={ownerPhone} />
            <CustomInputLong placeholder="Password" type="password" iconType="password" onChange={(e) => setInformation(e.target.value, 'ownerPass')} val={ownerPass} />
            <CustomInputLong placeholder="Retype Password" type="password" iconType="password" onChange={(e) => setInformation(e.target.value, 'ownerCpass')} val={ownerCpass} />
          </div>

          <div className="checkout-form-title-dispensary">
            <h1>Dispensary Information</h1>
          </div>
          <div className="checkout-form-cont">
            <CustomInputLong placeholder="Dispensary Store Name" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'disName')} val={disName} />
            <CustomInputLong placeholder="Dispensary's Phone Number" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'disPhone')} val={disPhone} />
            <CustomInputLong placeholder="Dispensary Street Address" type="email" iconType="email" onChange={(e) => setInformation(e.target.value, 'disStreet')} val={disStreet} />
          </div>

          <div className="checkout-form-address-dispensary">
            <input placeholder="City" value={city} onChange={(e) => setInformation(e.target.value, 'city')} type="number" />
            <input placeholder="GA" value={GA} onChange={(e) => setInformation(e.target.value, 'GA')} type="number" />
            <input placeholder="Zip Code" value={zip} onChange={(e) => setInformation(e.target.value, 'zip')} type="number" maxLength={6} />
          </div>
          {/* <CustomInputLong placeholder="Dispensary's Hours" type="email" src={mapImg} /> */}
          <ProfileCard onClick={setHours} text="Dispensary's Hours" src={mapImg} />

          <div className="terms-conditions pos-start">
            <input type="checkbox" id="auth" name="auth" width={40} />
            <label htmlFor="auth" id="agreeLabel">By checking I am an authorized signatory of this business, with the power to commit to binding agreements</label>
          </div>
          <div className="checkout-form-title-dispensary">
            <h1>Tax Information</h1>
          </div>
          <CustomInputLong placeholder="Business entity/Company name" type="text" iconType="password" onChange={(e) => setInformation(e.target.value, 'businessName')} val={businessName} />
          <h5 className="mt10 mb30 ph10 greyTxt">Ensure this matches the offical tax focuments for your business.</h5>
          <CustomInputLong placeholder="FEIN(Fedral Employer Identification Number)" type="text" src={messageImg} onChange={(e) => setInformation(e.target.value, 'feinName')} val={feinName} />
          <div className="terms-conditions pos-start">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" />
            <label htmlFor="agreeTerms" id="agreeLabel"> By checking this I agree to CannaGo's <a href='#' style={{ color: '#61D273' }}> Terms & Conditions</a> </label>
          </div>
          <button className="checkout-form-submit" type="submit">Create Account</button>
          <div className="large-img-cont-dispensary"><img src={transMaple} alt="transparent maple" className="transMaple" /></div>
        </form>
      </div>
      <Footer />
    </>
  )
}
export default DispensarySignUpForm;