import React from 'react'
import ShopLocalCard from './ShopLocalCard'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'

const ShopLocal = () => {
    //settings for slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }, {
                breakpoint: 710,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //const dummy Data
    const [shopLocal] = React.useState([
        {
            id: 1,
            name: "Cannabis Station",
            img: img1,
            hours: "9am - 9pm"
        }, {
            id: 2,
            name: "Harvest",
            img: img2,
            hours: "10am - 12pm"
        }, {
            id: 3,
            name: "Sunnyside",
            img: img3,
            hours: "9am - 11pm"
        }, {
            id: 4,
            name: "Cannabis Station 2",
            img: img1,
            hours: "9am - 9pm"
        }
    ])

    return (
        <section className="shop-local">
            <div className="my-container">
                <div className="shop-local-wrapper">
                    <h2 className="h2-heading">
                        Shop Local Dispensaries
                    </h2>

                    <Slider {...settings}>
                        {shopLocal.map(el => (<ShopLocalCard key={el.id} {...el}/>))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ShopLocal
