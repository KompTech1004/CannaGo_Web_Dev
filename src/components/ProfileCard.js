import React from 'react'

const ProfileCard = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`profile-card ${props.logout && ' profile-hover'}`}>
            <img src={props.src} alt=""/>
            <p>{props.text}</p>
        </button>
    )
}
export default ProfileCard;