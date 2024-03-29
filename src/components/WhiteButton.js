import React from 'react'

export default function WhiteButton({ ...props }) {
  return (
    <button
      className="whiteButton"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}
