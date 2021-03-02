import React, { useState } from 'react'
//logo
import logo from '../images/logo.png'
import cannabisImg from '../images/cannabis-img.png'
import bagIcon from '../images/bag-icon.svg'
import userIcon from '../images/user-icon.svg'
import { useHistory } from "react-router-dom";
import { RiMenu4Fill } from 'react-icons/ri'
import OrderIcon from '../images/order-status.png'

const Navbar = () => {
    let history = useHistory();
    const Shop = () => {
        history.push("/");
    }
    const Home = () => {
        history.push("/");
    }
    const Cart = () => {
        !localStorage.getItem('usertype')
            ? history.push("/login")
            : history.push('/emptycart')
    }
    const status = () => {
        history.push('/orderstatus')
    }
    const login = () => {
        localStorage.getItem('loggedIn') == 'true' ? history.push('/profile') : history.push("/login")
    }
    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    const toggleNavbar = () => setNavbarIsOpen(!navbarIsOpen)

    const [loginStatus, setloginStatus] = useState(localStorage.getItem("loggedIn"))

    return (
        <nav className="navigation-bar">
            {/*Cannabis img*/}
            <img src={cannabisImg} alt="cannabis-img" className="cannabis-img" />

            <div className="my-container">
                {localStorage.getItem('usertype') === "consumer" && localStorage.getItem("loggedIn") === true && <button className="check-order" onClick={status}>
                    <img src={OrderIcon} />
                    <p>Check your order status</p>
                </button>
                }
                <div className="navigation-wrapper">
                    <a onClick={Home} className="logo pointer">
                        <img src={logo} alt="logo-img" />
                    </a>
                    <ul className={`nav-list ${navbarIsOpen && "show"}`}>
                        <li
                            className={`nav-list-item ${(history.location.pathname === "/" || history.location.pathname === "/storeonline" || history.location.pathname === "/selecteditem" || history.location.pathname === "/orderstatus") && ' active'}`}>
                            <a onClick={Shop} className="nav-list-link  pointer">SHOP</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">FOLLOW US</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">ABOUT US</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">BLOG</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">PRESS</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">FAQ</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">CONTACT US</a>
                        </li>
                        <li className="nav-list-item ">
                            <a href="/" className="nav-list-link ">CAREERS</a>
                        </li>
                        <li
                            className={`nav-list-item nav-link-icon ${(history.location.pathname === "/emptycart" || history.location.pathname === "/cart" || history.location.pathname === "/checkout" || history.location.pathname === "/orderexperience") && ' active'}`}>
                            <a onClick={Cart} className="nav-list-link  pointer">
                                <img src={bagIcon} alt="bag-icon" />
                            </a>
                        </li>
                        <li
                            className={`nav-list-item nav-link-icon ${(history.location.pathname === "/profileinfo" || history.location.pathname === "/profile" || history.location.pathname === "/orderhistory") && " active2"}`}>
                            <a onClick={login} className="nav-list-link pointer mb-1 ">
                                <img src={userIcon} alt="user-icon" /> {loginStatus == 'true'
                                    ? "Welcome, John "
                                    : "Sign In"}
                            </a>
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

export default Navbar
