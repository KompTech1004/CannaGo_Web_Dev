import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import CustomInput from '../components/CustomInput'
import ProfileCard from '../components/ProfileCard'

import mapImg from '../images/mapImg.png'
import transMaple from '../images/profile-left.png'
import station from '../images/station.svg'
import FEINchecked from '../images/FEINchecked.svg'

const DispensarySignUpForm = () => {
  let history = useHistory();
  const submitHandler = e => {
    e.preventDefault();
    history.push("/dispensarylanding");
  }
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [ownerEmail, setOwnerEmail] = useState()
  const [ownerPhone, setOwnerPhone] = useState()
  const [ownerPass, setOwnerPass] = useState()

  const [disName, setDisName] = useState()
  const [disEmail, setDisEmail] = useState()
  const [disPhone, setDisphone] = useState()
  const [disStreet, setDisStreet] = useState()
  const [city, setCity] = useState()
  const [GA, setGA] = useState()
  const [zip, setZip] = useState();
  const [businessName, setBusinessName] = useState();
  const [feinName, setFeinName] = useState();

  const goToSetHours = () => {
    history.push("/hourset");
  }

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
    } else if (order === 'disName') {
      setDisName(val)
    } else if (order === 'disEmail') {
      setDisEmail(val)
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
  // const expHandler = e => {
  //   let value = e.nativeEvent.data;
  //   if ((value >= 0 && value < 9)) {
  //     if (e.target.value.length === 2)
  //       e.target.value += "/"
  //     setExp(e.target.value)
  //   }
  // }
  // const cvcHandler = e => {
  //   const { value, maxLength } = e.target;
  //   const message = value.slice(0, maxLength);
  //   setCvc(message);
  // }
  const zipHandler = e => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);
    setZip(message);
  }

  return (
    <>
      <div className="checkout-form-cont mt90 checkout-form-cont-spacing">
        <form className="checkout-form" onSubmit={submitHandler}>
          <h1 className="greyTxt">Dispensary Information</h1>
          <div className="checkout-form-title-dispensary">
            <h2>Owner's Information</h2>
          </div>
          <div className="checkout-form-cont">
            <CustomInput placeholder="First Name" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'first')} val={firstName} />
            <CustomInput placeholder="Last Name" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'last')} val={lastName} />
            <CustomInput placeholder="Owner's Email Address" type="email" iconType="email" onChange={(e) => setInformation(e.target.value, 'ownerEmail')} val={ownerEmail} />
            <CustomInput placeholder="Owner's Phone Number" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'ownerPhone')} val={ownerPhone} />
            <CustomInput placeholder="Change Password" type="password" iconType="password" onChange={(e) => setInformation(e.target.value, 'ownerPass')} val={ownerPass} />
          </div>

          <div className="checkout-form-title-dispensary">
            <h2>Dispensary Information</h2>
          </div>
          <div className="checkout-form-cont">
            <CustomInput placeholder="Dispensary Store Name" type="text" src={station} onChange={(e) => setInformation(e.target.value, 'disName')} val={disName} />
            <CustomInput placeholder="Dispensary Email Address" type="email" iconType="email" onChange={(e) => setInformation(e.target.value, 'disEmail')} val={disEmail} />
            <CustomInput placeholder="Dispensary's Phone Number" type="text" iconType="user" onChange={(e) => setInformation(e.target.value, 'disPhone')} val={disPhone} />
            <CustomInput placeholder="Dispensay's Street Address" type="text" src={mapImg} onChange={(e) => setInformation(e.target.value, 'disStreet')} val={disStreet} />
          </div>

          <div className="checkout-form-address-dispensary">
            <input placeholder="City" value={city} onChange={(e) => setInformation(e.target.value, 'city')} type="number" />
            <input placeholder="GA" value={GA} onChange={(e) => setInformation(e.target.value, 'GA')} type="number" />
            <input placeholder="Zip Code" value={zip} onChange={(e) => setInformation(e.target.value, 'zip')} type="number" maxLength={6} />
          </div>
          {/* <CustomInput placeholder="Dispensay's Hours" type="text" src={mapImg} /> */}
          <ProfileCard onClick={goToSetHours} text="Dispensary's Hours" src={mapImg} />
          <div className="terms-conditions pos-start">
            <input type="checkbox" id="auth" name="auth" width={40} />
            <label htmlFor="auth" id="agreeLabel">By checking I am an authorized signatory of this business, with the power to commit to binding agreements</label>
          </div>

          <div className="checkout-form-title-dispensary">
            <h1>Tax Information</h1>
          </div>
          <div className="checkout-form-cont">
            <CustomInput placeholder="Business entity/Company name" type="text" src={station} onChange={(e) => setInformation(e.target.value, 'businessName')} val={businessName} />
            <h5 className="mt10 mb30 greyTxt">Ensure this matches the offical tax focuments for your business.</h5>
            <CustomInput placeholder="FEIN(Fedral Employer Identification Number)" type="text" src={FEINchecked} onChange={(e) => setInformation(e.target.value, 'feinName')} val={feinName} />
            <div className="terms-conditions pos-start">
              <input type="checkbox" id="agreeTerms" name="agreeTerms" />
              <label htmlFor="agreeTerms" id="agreeLabel"> By checking this I agree to CannaGo's <a href='#' style={{ color: '#61D273' }}> Terms & Conditions</a> </label>
            </div>
          </div>
          <button className="checkout-form-update" type="submit">Update</button>
          <div className="large-img-cont-dispensary"><img src={transMaple} alt="transparent maple" className="transMaple" /></div>
        </form>
      </div>
    </>
  )
}
export default DispensarySignUpForm;