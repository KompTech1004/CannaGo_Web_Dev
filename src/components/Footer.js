import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="my-container">
                <div className="footer-wrapper">
                    <div className="footer-item">
                        <a href="/" className="footer-link">ABOUT US</a>
                        <a href="/" className="footer-link">AFFILIATES</a>
                        <a href="/" className="footer-link">ADVERTISING</a>
                        <a href="/" className="footer-link">TERMS & CONDITIONS</a>
                        <a href="/" className="footer-link">PRIVACY & COOKIES</a>
                        <a href="/" className="footer-link">CAREERS</a>
                    </div>
                    <div className="footer-item">
                        <p className="footer-link">SIGN UP FOR OUR NEWSLETTER</p>
                        <form action="" className="footer-form">
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" />
                                <button type="submit">submit</button>
                            </div>
                        </form>
                        <a href="/" className="footer-social"><AiFillInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
