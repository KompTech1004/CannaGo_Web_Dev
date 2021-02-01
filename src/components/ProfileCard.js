import React from 'react'

const ProfileCard = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`profile-card ${props.logout && ' profile-hover'}`}>
            <img src={props.src}/>
            <p>{props.text}</p>
        </button>
    )
}
export default ProfileCard;