import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import OrderModal from '../components/OrderModal'
import Footer from '../components/Footer'
import DispensaryNavbar from '../components/DispensaryNavbar'
import GoBackButton from '../components/GoBackButton'
import StoreOnlineProducts from '../components/StoreOnlineProducts'
const ShopDispensaryScreen = () => {
    const history = useHistory()
    const addProduct = () => {
        history.push({
            pathname: 'storeadd',
            state: 'add'
        })
    }
    const [modalShow, setModalShow] = useState(false);
    const showModalFunc = () => {
        setModalShow(true)
    }
    const hideModalFunc = () => {
        setModalShow(false)
    }
    const goToOrderConfirm = () => {
        setModalShow(false)
        history.push('/orderconfirm')
    }
    return (
        <>
            <DispensaryNavbar />
            <OrderModal show={modalShow} onHide={hideModalFunc} hidemode={hideModalFunc} acceptmode={goToOrderConfirm} />
            <div className="shopping-dispensary-cont">
                <div className="back-cont"><GoBackButton /></div>
                <h1>Your Store Front</h1>
                <button
                    onClick={addProduct}
                    className="addProduct">
                    <p>Add Product</p>
                </button>
            </div>
            <StoreOnlineProducts />
            <Footer />
        </>
    )
}

export default ShopDispensaryScreen;