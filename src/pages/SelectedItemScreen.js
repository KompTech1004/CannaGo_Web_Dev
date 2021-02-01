import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../images/cannabis-small.png'
import SelectedProduct from '../components/SelectedProduct'
import OnlineStoreProducts from '../components/OnlineStoreProducts'
import Footer from '../components/Footer'
const SelectedItemScreen = () => {
    return (
        <div>
            <Navbar/>
            <div className="small-img-cont"><img src={Image} style={{width:"100%"}}/></div>
            <div className="selected-product-cont"><SelectedProduct/></div>
            <OnlineStoreProducts text="More Products from Cannabis Station" />
            <Footer/>
        </div>
    )
}
export default SelectedItemScreen;