import React from 'react'
import BackButton from '../components/BackButton'
import LogoWithUserType from '../components/LogoWithUserType'
import CustomInput from '../components/CustomInput'
import WhiteButton from '../components/WhiteButton'
import clip from '../images/clip.png'
import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple.png'
import { useHistory, Link } from "react-router-dom";
export default function LoginScreen() {
    let history = useHistory();
    const profile = () => {
        localStorage.setItem('loggedIn', true)
        history.push("/");
    }
    const forgotpwd = () => {

        history.push("/forgot");
    }
    const submitHandler = e => {
        e.preventDefault();
        // history.push("/orderexperience");
    }
    return (
        <section className="section">
            <div className="checkout-form-cont">
                <BackButton url="" />
                <LogoWithUserType userType="for consumers" />
                <CustomInput placeholder="Email Address" type="email" iconType="email" />
                <CustomInput placeholder="Password" type="password" iconType="password" />
                <div className="forgot-password-txt-pos">
                    <Link to="/forgot" className="forgot-pwd-txt">Forgot Password?</Link>
                </div>
                <button onClick={profile} className="bt-primary mt50" type="submit">Signin</button>

                <p className="greyText s31 mt90">Don't have an account?</p>
                <Link to="/signup" className="main s32 mb90 z-index-1">Sign up</Link>
                <WhiteButton title="Want to drive with us?" />
                <WhiteButton title="Want to sell with us?" />
            </div>
                <div className="clipArea"><img src={clip} alt="clip" className="clip" /></div>
                <div className="greenArea"><img src={greenPhone} alt="green" className="greenPhone" /></div>
                <div className="mapleArea"><img src={maple} alt="green" className="maple" /></div>

        </section>
    )
}
