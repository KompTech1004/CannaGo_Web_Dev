import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import InputGroup from './InputGroup'
import { Lorem } from '../constants/LongText'

function AddItemSettings(props) {
  const history = useHistory()
  const location = useLocation()
  const [quantity, setQuantity] = useState(26)
  const [fee, setFee] = useState(0)
  const [productFee, setProductFee] = useState(0)
  const [grossFee, setGrossFee] = useState(0)

  const editPrice = 50

  useEffect(() => {
    setProductFee(location.state === 'update' ? editPrice : 0)
    setFee(location.state === 'update' ? editPrice * 0.3 : 0)
    setGrossFee(location.state === 'update' ? editPrice * 0.7 : 0)
  }, [])

  const setAllFee = (e) => {
    setProductFee(e.target.value)
    setFee(e.target.value * 0.3)
    setGrossFee(e.target.value * 0.7)
  }
  const stockQuantity = (e) => {
    if (e === 'minus') {
      quantity < 2 ? setQuantity(1) : setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }
  const submitHandler = e => {
    e.preventDefault();
    history.push("/shopdispensary");
  }
  const upload = () => {
    alert('upload COA')
  }
  return (
    <>
      <div className="dispensary-cont-storeadd">
        <div className="addToStore mt50 mb90">
          <h2 className="mt30">{props.status === 'add' ? 'Add an Item to Your Store' : 'Update Product'}</h2>
        </div>
        <div className="row-items">
          <h2>Quantity in Stock</h2>
          <div className="counter-container">
            <button
              onClick={() => stockQuantity('minus')}>-</button>
            <p>{quantity}</p>
            <button
              onClick={() => stockQuantity('plus')}>+</button>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="price-group-wrapper">
            <div className="price-item">
              <h2>Our fees</h2>
              <input type="number" value={parseFloat(fee).toFixed(2)} disabled />
            </div>
            <div className="price-item">
              <h2>Product Price</h2>
              <input type="number" onChange={(val) => setAllFee(val)} value={productFee} />
            </div>
            <div className="price-item">
              <h2>Gross Price</h2>
              <input type="number" value={parseFloat(grossFee).toFixed(2)} disabled />
            </div>
          </div>
          <InputGroup desc="Name of Product" placeholder="Enter Item's Name..." val={props.status === 'add' ? '' : 'CBD Flower'} />
          <InputGroup desc="Tags" placeholder="Enter Relevant Search Tags of Item…" val={props.status === 'add' ? '' : 'CBD Flower, CBD Plant, CBD Bud'} />
          <InputGroup textArea desc="Description" placeholder="Enter Items Description..." val={props.status === 'add' ? '' : Lorem} />
          <div className="align-center">
            <button className="bt-upload-noncap mt90" type="button" onClick={upload}>Upload COA</button>
          </div>
          <div className="align-center">
            {
              location.state === 'add' ?
                <button className="bt-primary-noncap mt90" type="submit">Add to Store</button>
                :
                <div className="space-around">
                  <button className="checkout-form-delete" type="button">Delete</button>
                  <button className="checkout-form-update" type="submit">Update</button>
                </div>
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default AddItemSettings
