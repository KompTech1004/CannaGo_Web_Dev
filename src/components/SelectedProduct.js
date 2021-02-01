import React from 'react'
import Image from '../images/single-product'
import AddButton from './AddButton'
const SelectedProduct = () => {
    return (
        <div className="selected-product">
            <div className="selected-img">
                <img src={Image}/>
                <AddButton text="Add to cart"/>
            </div>
            <div className="selected-text">
                <p>Name: Just CBD Gummies</p>
                <p className="selected-price">Price: $ 24.99</p>
                <p className="selected-desc">Description:</p>
                <p className="selected-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
            </div>
        </div>
    )
}
export default SelectedProduct;