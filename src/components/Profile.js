import React from 'react'
import plus from '../images/plus.svg'

export default function Profile({...props}) {
  return (
    <div className="avatar">
      <img src={props.src} alt="avatar" className="avatarImg" />
      <div onClick={props.onClick} className="plusBtn">
        <img src={plus} alt="plus" className="plusImg" />
      </div>
    </div>
  )
}
