import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsLock } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

export default function CustomInput({ ...props }) {
    return (
        <div className={props.half ? 'inputField-half' : 'inputField'}>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={props.half ? 'input-half' : 'input-el'}
            />
            {
                props.iconType === 'email'
                    ? <AiOutlineMail color="#61D273" size={30} className="iconPos" />
                    : props.iconType === 'password'
                        ? <BsLock color="#61D273" size={30} className="iconPos" />
                        : props.iconType === 'user'
                            ? <AiOutlineUser color="#61D273" size={30} className="iconPos" />
                            : <AiOutlineUser color="#61D273" size={30} className="iconPos" />
            }
        </div>
    )
}
