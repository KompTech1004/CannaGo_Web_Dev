import React from 'react'

import cannabisImg from "../images/cannabis-img.png";


const Header = () => {
    return (
        <header className="header">

            <img src={cannabisImg} alt="cannabis-img" className="header-img-1" />
            <img src={cannabisImg} alt="cannabis-img" className="header-img-2" />
            <div className="my-container h100">
                <div className="header-wrapper">
                    <h1 className="h1-heading">Download the CannaGo App</h1>
                    <h2 className="header-subtitle">Next Day Delivery</h2>
                    <h2 className="header-subtitle-2">Serving the Atlanta GA Metro Area | No Minimum Order</h2>
                    <button className="bt-primary">Download Now</button>
                    <p className="p-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header
