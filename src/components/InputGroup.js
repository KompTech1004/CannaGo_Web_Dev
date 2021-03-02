import React from 'react'

function InputGroup(props) {
  return (
    <div className="normal-input">
      <h2>{props.desc}</h2>
      {
        props.textArea ?
          <textarea defaultValue={props.val || ''} />
          :
          <input type="text" placeholder={props.placeholder} defaultValue={props.val || ''} />
      }
    </div>
  )
}

export default InputGroup
