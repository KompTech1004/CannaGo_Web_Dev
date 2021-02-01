import React from 'react'
import { useHistory } from "react-router-dom";

const AddButton = (props) => {
    let history = useHistory();
    const shoppingcart = () => {
        if (localStorage.getItem('loggedIn')) {
            history.push("/cart");    
        } else {
            history.push('/login');
        }
    }
    return (
        <button className="add-button" onClick={shoppingcart}>
            {props.text}
        </button>
    )
}
export default AddButton;