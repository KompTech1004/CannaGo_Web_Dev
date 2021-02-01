import React from 'react'
import ImageRight from '../images/profile-right.png';
import ImageLeft from '../images/profile-left.png';
import User from '../images/user-green.svg'
import Contact from '../images/contact.svg'
import Email from '../images/email.svg'
import Password from '../images/password.svg';
import ProfileFormNameCard from './ProfileFormNameCard'
import ProfileFormButton from './ProfileFormButton'
import {useHistory} from "react-router-dom";
const ProfileInfo = () => {
    let history = useHistory();
    const submitHandler = e => {
        e.preventDefault();
    }
    const phoneHandler = () =>{
        history.push('/editcontact');
    }
    const emailHandler = () =>{
        history.push('/editemail');
    }
    const passwordHandler = () =>{
        history.push('/editpassword');
    }
    const deactivateHandler = () =>{
        history.push('/deactivate');
    }
    return (
        <div>
            <div className="profile-img-right"><img src={ImageRight}/></div>
            <div className="profile-body-cont">
                <div className="profile-form-cont">
                    <form onSubmit={submitHandler} className="profile-form">
                        <h1>Profile Information</h1>
                        <p>Welcome John H, 25</p>
                        <div className="profile-form-name">
                            <ProfileFormNameCard type="text" src={User} text="John" placeholder="First name"/>
                            <ProfileFormNameCard type="text" src={User} text="Henry" placeholder="Last name"/>
                            <ProfileFormNameCard type="date" src={User} text="06/28/1994" placeholder="D.O.B"/>
                        </div>
                        <div className="profile-cards">
                            <ProfileFormButton onclick={phoneHandler} text="Phone Number:786 7821 1232" src={Contact}/>
                            <ProfileFormButton onclick={emailHandler} text="Email:JohnH@gmail.com" src={Email}/>
                            <ProfileFormButton onclick={passwordHandler} text="Change Password" src={Password}/>
                            <ProfileFormButton onclick={deactivateHandler} isDeactive={true} text="Deactivate Account" src={User}/>
                        </div>
                        <div className="form-submit">
                            <button>Update</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="profile-img-left"><img src={ImageLeft}/></div>
        </div>
    )
}
export default ProfileInfo