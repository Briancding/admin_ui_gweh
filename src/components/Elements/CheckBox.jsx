import React from 'react'

function CheckBox(props) {
const { label, id, ...rest  } = props;    
  return (
    <div>
        <input
                className="text-sm accent-primary"
                id={id}
                {...rest}
              />
              <label htmlFor={id} className="pl-4 text-sm text-gray-01">
                {label}
              </label>
    </div>
  )
}

export default CheckBox