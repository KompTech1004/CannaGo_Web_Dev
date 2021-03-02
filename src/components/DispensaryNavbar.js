import React, { useState, useEffect } from 'react'
import OrderModal from './OrderModal'

import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import cannabisImg from '../images/cannabis-img.png'
import carIcon from '../images/car-icon.svg'
import userIcon from '../images/user-icon.svg'
import { useHistory } from "react-router-dom";
import { RiMenu4Fill } from 'react-icons/ri'

const DispensaryNavbar = () => {
    let history = useHistory();
    const [userType, setUserType] = useState('')
    useEffect(() => {
        setUserType(localStorage.getItem('usertype'))
    }, [])

    const [modalShow, setModalShow] = useState(false);
    const modalHandler = () => {
        setModalShow(true)
    }
    const goToOrderConfirm = () => {
        setModalShow(false)
        history.push({
            pathname: '/orderconfirm',
            state: userType
        })
    }

    const Home = () => {
        userType === 'dispensary' ?
            history.push("/dispensarylanding")
            :
            history.push("/profile");
    }
    const UpdateStore = () => {
        localStorage.getItem('usertype') === 'dispensary'
            ? modalHandler()
            : localStorage.getItem('usertype') === 'driver'
                ? modalHandler()
                : history.push("/login")
    }
    const login = () => {
        localStorage.getItem('usertype') === 'dispensary'
            ? history.push('/dispensaryinfo')
            : localStorage.getItem('usertype') === 'driver'
                ? history.push('/driverprofileinfo')
                : history.push("/login")
    }
    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    const toggleNavbar = () => setNavbarIsOpen(!navbarIsOpen)

    return (
        <nav className="navigation-bar">
            <OrderModal show={modalShow}
                onHide={() => setModalShow(false)}
                acceptmode={goToOrderConfirm}
                hidemode={() => setModalShow(false)} />
            {/*Cannabis img*/}
            <img src={cannabisImg} alt="cannabis-img" className="cannabis-img" />

            <div className="my-container">
                <div className="navigation-wrapper">
                    <a href="#" onClick={Home} className="logo pointer">
                        <img src={localStorage.getItem('usertype') === 'driver' ? logo3 : logo2} alt="logo-img" />
                    </a>
                    <ul className={`nav-list ${navbarIsOpen && "show"}`}>
                        <li
                            className={`nav-list-item ${(history.location.pathname === "/dispensarylanding" || history.location.pathname === "/storeadd" || history.location.pathname === "/updatestore" || history.location.pathname === "/signup" || history.location.pathname === "/profile" || history.location.pathname === "/driverprofileinfo") && ' active'}`}>
                            <a href="#" onClick={Home} className="nav-list-link  pointer">HOME</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">CAREERS</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">FOLLOW US</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">CANNA BLOG</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">FAQS</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">HELP CENTER</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">OUR TEAM</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">OUR MISSION</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/#" className="nav-list-link ">PRESS</a>
                        </li>

                        <li
                            className={`nav-list-item nav-link-icon ${(history.location.pathname === "/emptycart" || history.location.pathname === "/cart" || history.location.pathname === "/checkout" || history.location.pathname === "/orderexperience" || history.location.pathname === "/driverorderstatus" || history.location.pathname === "/orderconfirm") && ' active'}`}>
                            <a onClick={UpdateStore} className="nav-list-link  pointer">
                                <img src={carIcon} alt="bag-icon" />
                                {history.location.pathname === "/orderconfirm" && <label>1</label>}
                            </a>
                        </li>
                        <li
                            className={`nav-list-item nav-link-icon ${(history.location.pathname === "/dispensaryinfo") && " active2"}`}>
                            <p onClick={login} className="nav-list-link pointer mb-1 ">
                                <img src={userIcon} alt="user-icon" /> {userType === 'dispensary'
                                    ? "Welcome, Cannabis Station "
                                    : userType === 'driver'
                                        ? "Welcome, John Driver"
                                        : "Sign In"}
                            </p>
                        </li>
                    </ul>

                    <div className="btn-toggle" onClick={toggleNavbar}>
                        <RiMenu4Fill />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default DispensaryNavbar
