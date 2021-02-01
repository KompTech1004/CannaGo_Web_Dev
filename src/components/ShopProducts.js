import React from 'react'
import ProductCard from './ProductCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//images
import img1 from '../images/product-1.png'
import img2 from '../images/product-2.png'
import img3 from '../images/product-3.png'
import img4 from '../images/product-4.png'


const ShopProducts = () => {

    //slider settigns
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1193,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    //dummy data
    const [products] = React.useState([
        { id: 1, name: "Just CBD Gummies", price: 24.2, img: img1 },
        { id: 2, name: "CBD Flower", price: 40.2, img: img2 },
        { id: 3, name: "CBD Wax 10 ML", price: 15.2, img: img3 },
        { id: 4, name: "CBD Wax", price: 14.2, img: img4 },
        { id: 5, name: "Just CBD Gummies", price: 15, img: img1 }
    ])

    return (
        <section className="shop-products">
            <div className="my-container">
                <div className="shop-products-wrapper">
                    <h2>Shop Product</h2>

                    <Slider {...settings}>
                        {products.map(el => (<ProductCard key={el.id} {...el} />))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ShopProducts
