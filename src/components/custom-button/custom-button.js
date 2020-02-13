import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({chidren, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {/* {children} */}
    </button>
)

export default CustomButton