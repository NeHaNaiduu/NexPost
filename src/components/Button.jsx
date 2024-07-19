import React from 'react'

function Button({
    children,
    type="button",
    className="",
    bgColor="bg-blue-500",
    textColor="text-white",
    ...props
    
}) {
  return (
    <button className={`${className} create-account`} {...props}>
        {children}
    </button>
  )
}

export default Button