import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({chidren, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {/* {children} */}
    </button>
)

export default CustomButton