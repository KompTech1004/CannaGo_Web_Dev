import React, { useState, useEffect } from 'react'
import GoBackButton from '../components/GoBackButton'
import LogoWithUserType from '../components/LogoWithUserType'
import CustomInput from '../components/CustomInput'
import WhiteButton from '../components/WhiteButton'
import clip from '../images/clip.png'
import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple.png'
import { useHistory, Link } from "react-router-dom";

import consumers_logo from '../images/consumers_logo.png'
import dispensaries_logo from '../images/dispensaries_logo.png'
import drivers_logo from '../images/drivers_logo.png'

var usertype = "consumer";

export default function LoginScreen() {
    const [isConsumers, setIsConsumers] = useState(true)
    const [isDriver, setIsDriver] = useState(false)
    const [isDispensaries, setIsDispensaries] = useState(false)
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    useEffect(() => {
        if (localStorage.getItem('loggedIn') === 'true' && localStorage.getItem('usertype') === "consumer") {
            history.push('/')
        } else if (localStorage.getItem('loggedIn') === 'true' && localStorage.getItem('usertype') === "dispensary") {
            history.push('/dispensarylanding')
        } else if (localStorage.getItem('loggedIn') === 'true' && localStorage.getItem('usertype') === "driver") {
            history.push('/profile')
        } else {
            localStorage.setItem('usertype', "consumer")
            localStorage.setItem('loggedIn', false)
        }
    }, [])
    let history = useHistory();
    const login = async () => {
        await localStorage.setItem('loggedIn', 'true')
        isConsumers ?
            localStorage.setItem('usertype', 'consumer')
            : isDispensaries ?
                localStorage.setItem('usertype', 'dispensary')
                :
                localStorage.setItem('usertype', 'driver')
        history.push(isConsumers ? "/" : isDispensaries ? "/dispensarylanding" : "/profile");
    }
    function changeFirst() {
        if (isConsumers) {
            switchUser(3)
        } else {
            switchUser(1)
        }
    }
    function changeSecond() {
        if (isDispensaries) {
            switchUser(3)
        } else {
            switchUser(2)
        }
    }
    async function switchUser(id) {
        switch (id) {
            case 1:
                setIsConsumers(true)
                setIsDispensaries(false)
                setIsDriver(false)
                await localStorage.setItem('usertype', "consumer")
                break;
            case 2:
                setIsConsumers(false)
                setIsDispensaries(true)
                setIsDriver(false)
                await localStorage.setItem('usertype', "dispensary")
                break;
            case 3:
                setIsConsumers(false)
                setIsDispensaries(false)
                setIsDriver(true)
                await localStorage.setItem('usertype', "driver")
                break;
        }
        usertype = localStorage.getItem("usertype")
        console.log('--------usertype--------', usertype)
    }

    return (
        <section className="section">
            <div className="back-cont-login"><GoBackButton login /></div>
            <div className="checkout-form-cont">
                <LogoWithUserType
                    userType={isConsumers ? "for consumers" : isDispensaries ? "for dispensaries" : "for drivers"}
                    logo={isConsumers ? consumers_logo : isDispensaries ? dispensaries_logo : drivers_logo}
                />
                <CustomInput placeholder={isDispensaries ? "Dispensary Email Address" : "Email Address"} type="email" iconType="email" onChange={(val) => setEmail(val)} val={email} />
                <CustomInput placeholder="Password" type="password" iconType="password" onChange={(val) => setPwd(val)} val={pwd} />
                <div className="forgot-password-txt-pos">
                    <Link to="/forgot" className="forgot-pwd-txt">Forgot Password?</Link>
                </div>
                <button onClick={login} className="bt-primary mt50" type="submit">Signin</button>

                <p className="greyText s31 mt90">Don't have an account?</p>
                <Link to="/signup" className="main s32 mb90 z-index-1">Sign up</Link>
                <WhiteButton
                    title={isConsumers ? "Want to drive with us?" : "Want to buy from us?"}
                    onClick={changeFirst}
                />
                <WhiteButton
                    title={isDispensaries ? "Want to drive with us?" : "Want to sell with us?"}
                    onClick={changeSecond}
                />
            </div>
            <div className="clipArea"><img src={clip} alt="clip" className="clip" /></div>
            <div className={isDriver ? "greenAreaDriver" : "greenArea"}>
                <img src={greenPhone} alt="green" className={isDriver ? "greenPhoneDriver" : "greenPhone"} />
            </div>
            <div className={isConsumers ? "greenAreaCopy" : isDispensaries ? "greenAreaCopyDispensaries" : "greenAreaCopyDriver"}>
                <img src={greenPhone} alt="green" className={isConsumers ? "greenPhoneCopy" : isDispensaries ? "greenPhoneCopyDispensaries" : "greenPhoneCopyDriver"} />
            </div>
            <div className={isConsumers ? "mapleArea" : isDispensaries ? "mapleAreaDispensaries" : "mapleAreaDriver"}>
                <img src={maple} alt="green" className="maple" />
            </div>

        </section>
    )
}
